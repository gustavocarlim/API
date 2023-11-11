const Sequelize = require('sequelize');

const config = require('../../config/config');

const sequelize = new Sequelize(config.development);

const { BlogPost, Category, PostCategory } = require('../../models');

const validateCreatePost = async (title, content, categoryIds, id) => {
  const t = await sequelize.transaction();
  try {
    const newPost = { title, content, userId: id, published: new Date(), updated: new Date() };
    const check = categoryIds.every((categoryId) => Category.findByPk(categoryId));
    if (!check) {
      return { status: 404, data: { message: 'one or more "categoryIds" not found' } };
    }
    const post = await BlogPost.create(newPost, { transaction: t });
    const postId = post.id;
    const promises = categoryIds.map((categoryId) =>
      PostCategory.create({ postId, categoryId }, { transaction: t }));
    await Promise.all(promises);
    await t.commit();
    return { status: 201, data: post };
  } catch (error) {
    await t.rollback();
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  }
};  

module.exports = {
  validateCreatePost,
};