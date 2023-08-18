const express = require("express")
const conn = require("./db/connection")
require('dotenv').config()
const application = new express()
const morgan = require("morgan")  // use for logging 
const { userRouter } = require("./router/user")
const { productRouter } = require("./router/product")
const { categoryRoute } = require("./router/category")
const { orderRoute } = require("./router/order")
const { errorHandler } = require("./middleware/error-handler") 
application.use(express.json()) // middleware for parse body
application.use(morgan("dev"))
application.listen(process.env.PORT || 5000,()=>{
    const port = process.env.PORT || 5000 
    console.log(`server running on ${port} port`)
})

//this is home get method
application.get('/',(req,res)=>{
    console.log(req.header);
    res.json({message:"Success"})
})

// add api in URL
const APIRouter = express.Router();
application.use("/api",APIRouter)
APIRouter.get('/',(req,res)=>{
    res.json({message:"Api is working"})
})

// here is all router
APIRouter.use('/users',userRouter)
APIRouter.use("/products",productRouter)
APIRouter.use('/category',categoryRoute)
APIRouter.use("/orders",orderRoute)

// error handler middleware 
application.use(errorHandler)


// dummy data insert for limit
/* 
const hashedPassword =require("password-hash")
const { dummyUsers } = require("./dummydata")

const userWithPassword = dummyUsers.map((dummyUser)=>{
    dummyUser.password = hashedPassword.generate("12345");
    return dummyUser;
})

const { User } = require("./models/user") 
const saveduser =  User.create(userWithPassword).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
}); 
*/

