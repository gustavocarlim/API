const { Category } = require('../../models');

const addNewCategory = async (name) => {
  const newCategory = await Category.create(name);
  return newCategory;
};

module.exports = { addNewCategory };