const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define(
      'Category', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING(255)
      },
      {
        tableName: 'categories',
        underscored: true
    }
    )
  
    return Category
  }
  
  module.exports = CategoryModel