const { Category } = require('../../models');

const addNewCategory = async (name) => {
  const newCategory = await Category.create(name);
  return newCategory;
};

const getAllCategory = async () => {
  const AllCategories = await Category.findAll();
  return { status: 200, data: AllCategories }; 
};

module.exports = { addNewCategory, getAllCategory };