const express = require("express");
const { getUsers, saveUser, getUserById, userLogin, updateUser, updateUserById } = require("../controller/user-controller");
const { userAuth, adminAuth } = require("../middleware/user-auth-middleware");
const userRouter = express.Router();



userRouter.get('/', getUsers)
userRouter.get("/:id", getUserById)
userRouter.post('/', saveUser)
userRouter.post('/user-login', userLogin)
userRouter.put("/", userAuth, updateUser)
userRouter.put("/:id", adminAuth ,updateUserById)

module.exports = { userRouter }