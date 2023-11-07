const PostCategoryModel = (sequelize,Datatypes) => {
    const PostCategory = sequelize.define(
      'PostCategory', {
        postId: Datatypes.INTEGER,
        categoryId: Datatypes.INTEGER,
      },
      {
        tableName: 'posts_categories',
        underscored: true
  
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