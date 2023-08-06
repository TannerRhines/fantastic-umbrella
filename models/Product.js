// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {

    // id will be an integer, cannot be null

    // primary key ensures all values are unique, and autoIncrement automatically increases the id value for each new data entry
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    // product name will be a string, and cannot be null
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // price will include decimals, cannot be null, and will validate if the price entry includes a decimal
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    // stock will be an integer, cannot be null, defaulted to a value of 5, and will validate if stock is numeric value 
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
      validate: {
        isNumeric: true
      }
    },
    // category id will be an integer, and references the model category and id 
    category_id: {
      type: DataTypes.INTEGER,
      refrences: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
