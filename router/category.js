const express = require("express")
const { getCategories, saveCategory, getCategoryById } = require("../controller/category-controller")
const categoryRoute = express.Router()

categoryRoute.get("/", getCategories)
categoryRoute.get("/:id", getCategoryById)
categoryRoute.post("/",saveCategory)

module.exports = { categoryRoute }