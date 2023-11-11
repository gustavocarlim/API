const PostCategoryModel = (sequelize, _Datatypes) => {
    const PostCategory = sequelize.define(
      'PostCategory', {
        postId: { type: _Datatypes.INTEGER, foreignKey: true },
        categoryId: { type: _Datatypes.INTEGER, foreignKey: true }
      },
      {
        tableName: 'posts_categories',
        underscored: true,
        timestamps: false
      }
    )
  
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'blogPostCategories',
        through: PostCategory,
      });
  
      models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'categoryId',
        otherKey: 'postId',
        as: 'categoryBlogPosts',
        through: PostCategory,
      });
    }
  
  
    return PostCategory
  }
  
  module.exports = PostCategoryModel