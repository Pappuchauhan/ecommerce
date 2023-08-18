const Joi = require("joi");
const { Category } = require("../models/category");

async function getCategories(request, response) {
  const categories = await Category.find();
  response.json({ message: "category list", data: categories });
}

async function getCategoryById(request, response, next) {
  const _id = request.params.id;
  const category = await Category.findOne({ _id });
  return response.json({ message: "get category by id", data: category });
}

async function saveCategory(request, response, next) {
  const joiSchema = Joi.object({
    name: Joi.string().required(),
  });

  const joiResult = joiSchema.validate(request.body);

  if (joiResult.error) {
    // throw error
    return next(new Error(joiResult.error.details[0].message));
  }
  const category = new Category(joiResult.value);
  const categoryResult = await category.save();

  response.json({
    message: "category successfully saved",
    data: categoryResult,
  });
}
module.exports = { getCategories, saveCategory, getCategoryById };
