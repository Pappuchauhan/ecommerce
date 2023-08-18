const Joi = require("joi");
const { User } = require("../models/user");
const passwordHash = require("password-hash");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.GmailId,
    pass: process.env.GmailPass
  }
});


async function getUsers(request, response, next) {
   
  const limit = Number.parseInt(request.query.perPage)
  const page = request.query.page
  const orderby = request.query.orderBy
  const skip = limit * (page-1);
  const users = await User.find().skip(skip).limit(limit).sort(orderby);
 // const users = await User.find()
  const totalRow = await User.countDocuments();
  response.json({ message: "all users list", data: users, totalRow : totalRow });
}

async function getUserById(request, response, next) {
  const _id = request.params.id;
  const users = await User.findOne({ _id });
  response.json({ message: "get user by id", data: users });
}
async function saveUser(request, response, next) {
  const JoiSchema = Joi.object({
    name: Joi.string().min(5).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(20).required(),
    repassword: Joi.string().min(5).max(20).required(),
    phone: Joi.number().optional(),
    isActive: Joi.boolean().optional(),
    isAdmin: Joi.boolean().optional()
  });

  const result = JoiSchema.validate(request.body);

  // check joi have any validation error
  if (result.error) {
    return next(new Error(result.error.details[0].message));
  }

  // check password and re password are matched
  const userData = result.value;
  if (userData.password != userData.repassword) {
    return next(new Error("password and re password are not matched"));
  }

  // check email is already registered
  const userResult = await User.findOne({ email: userData.email });
  if (userResult) {
    return next(
      new Error("Email already register, please try another email id")
    );
  }

  const info = await transporter.sendMail({
    from: '"Pappu Chauhan" <pappuchauhan3391@gmail.com>', // sender address
    to: "pappuchauhan68@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    //html: "<b>Hello world?</b>", // html body
  });

  hashedPassword = passwordHash.generate(result.value.password);
  result.value.password = hashedPassword;
  const user = new User(result.value);
  const res = await user.save();


  

  console.log("Message sent: %s", info.messageId);


  console.log(res);
  return response.json({ message: "user saved successfully", data: res });
}

async function userLogin(request, response, next) {
  const joiSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(20).required(),
  });
  const joiResult = joiSchema.validate(request.body);

  if (joiResult.error) {
    // throw error
    response.status(400);
    return next(new Error(joiResult.error.details[0].message));
  }
  const userData = joiResult.value;
  const user = await User.findOne({ email: userData.email });

  if (!user) {
    response.status(401);
    return next(new Error("invalid email or password"));
  }

  const isValidPassword = passwordHash.verify(userData.password, user.password);

  if (!isValidPassword) {
    response.status(401);
    return next(new Error("invalid email or password"));
  }
  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    isActive: user.isActive,
    isAdmin: user.isAdmin
  };
  const token = jwt.sign(payload, process.env.PrivateKey);
  response.json({ message: "successfully logged in", data: user, token });
}

async function updateUser(request, response, next) {
  const joiSchema = Joi.object({
    name: Joi.string().min(5).max(20).required(),
    phone: Joi.string().min(10).max(12).required(),
  });

  const joiResult = joiSchema.validate(request.body);
  if (joiResult.error) {
    response.status(400);
    return next(new Error(joiResult.error.details[0].message));
  }

  try {
    const user = await User.findById(request.session.user._id);

    var updateValue = Object.assign(user, request.body);

    const ChangeUser = new User(updateValue);
    const saved = await ChangeUser.save();
    response.json({ message: "changed user data", data: saved });
  } catch (err) {
    console.log(err);
    response.status(500);
    return next(new Error("internal Server error"));
  }
}

async function updateUserById(request, response, next) {
  const joiSchema = Joi.object({
    name: Joi.string().min(5).max(20).required(),
    phone: Joi.string().min(10).max(12).required(),
    isActive: Joi.boolean(),
  });
  const joiResult = joiSchema.validate(request.body);

  if (joiResult.error) {
    return next(new Error(joiResult.error.details[0].message));
  }

  try {
    const _id = request.params.id;

    const user = await User.findById(_id);

    const changeData = Object.assign(user, joiResult.value);
    const userObj = new User(changeData);
    const result = await userObj.save();

    response.json({ message: "user successfully updated", data: result });
  } catch (err) {
    console.log(err);
    return next(new Error("internal server error"));
  }
}

module.exports = {
  getUsers,
  saveUser,
  getUserById,
  userLogin,
  updateUser,
  updateUserById,
};
