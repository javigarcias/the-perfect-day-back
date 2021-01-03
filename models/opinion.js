'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Opinion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Opinion.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    CommerceId: {
      type: DataTypes.INTEGER,
      allowNull:false
    }, 
    vote: {
      type: DataTypes.FLOAT,
      allowNull:false
    },
    opinion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Opinion',
  });
  return Opinion;
};