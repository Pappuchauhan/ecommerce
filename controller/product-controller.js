const Joi = require("joi");
const { Product } = require("../models/product");
const { Bernard } = require("../models/bernard");
const fs = require("fs");
const csv = require("fast-csv");

async function getProducts(request, response, next) {
  try {
    const products = await Product.find().populate("category");
    response.json({ message: "get all products list", data: products });
  } catch (error) {
    console.log(error);
    next(new Error("internal server error"));
  }
}

async function getProductById(request, response, next) {
  try {
    const _id = request.params.id;
    const product = await Product.findOne({ _id });
    response.json({ message: "get product by id", data: product });
  } catch (error) {
    console.log(error);
    return next(new Error("internal server error"));
  }
}

async function saveProduct(request, response, next) {
  const joiSchema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    price: Joi.number().required(),
    discount: Joi.number().required(),
    image: Joi.string().optional(),
    category: Joi.string().required(),
    isActive: Joi.boolean().optional(),
  });
  const joiResult = joiSchema.validate(request.body);

  if (joiResult.error) {
    return next(new Error(joiResult.error.details[0].message));
  }
  const product = new Product(joiResult.value);
  const result = await product.save();
  return response.json({ message: "Product successfully saved", data: result });
}

async function saveCsvFile(request, response, next) {
  let filePath =
    "C:/xampp/htdocs/nodejs/ecom/uploads/csv/" + request.file.filename;
  let stream = fs.createReadStream(filePath);
  let csvData = [];
  try {
    let person = {};
    let csvStream = csv
      .parse()
      .on("data", function (data) {
        person = {
          fname: data[0],
          lname: data[1],
          email: data[2],
          personalize: data[3],
          linkedin: data[4],
          status: data[5],
        };
        csvData.push(person);
      })
      .on("end", function () {
        // Remove Header ROW
        csvData.shift();
        Bernard.create(csvData)
          .then((result) => {
            response.json({ message: "CSV successfully uploaded", data:result });
          })
          .catch((err) => {
            return next(new Error("Internal Server Error"))
          });
        // -> you can comment the statement to see the uploaded CSV file.
        fs.unlinkSync(filePath);
      });

    stream.pipe(csvStream);
    
  } catch (error) {
    return next(new Error("Internal Server Error"))
  }
}
module.exports = { getProducts, saveProduct, getProductById, saveCsvFile };
