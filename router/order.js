const express = require("express")
const orderRoute = express.Router()


orderRoute.get("/",(req,res)=>{
    res.json({"message":"this is order router"})
})

module.exports = { orderRoute }