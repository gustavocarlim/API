const { postService } = require('../services/postService/index');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const { status, data } = await postService.validateCreatePost(title, content, categoryIds, id);
  res.status((status)).json(data);
};

module.exports = {
  createPost,
};