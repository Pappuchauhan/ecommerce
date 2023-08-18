const jwt = require("jsonwebtoken");
require("dotenv").config();

function userAuth(request, response, next) {
  try {
    const bearerToken = request.headers.authorization;
    const token = bearerToken.split(" ")[1];
    const payload = jwt.verify(token, process.env.PrivateKey);
    request.session = {
      user: payload,
    };

    next();
  } catch (error) {
    return next(new Error("invalid token"));
  }
} 

function adminAuth(request, response, next) {
  try {
    const bearerToken = request.headers.authorization;
    const token = bearerToken.split(" ")[1];
    const payload = jwt.verify(token, process.env.PrivateKey);
    if (payload.isAdmin) {
      request.session = {
        user: payload,
      };
      return next();
    }

    return next(new Error("You are unable to access the resource"));
  } catch (err) {
    return next(new Error("invalid token"));
  }
}

module.exports = { userAuth, adminAuth };
