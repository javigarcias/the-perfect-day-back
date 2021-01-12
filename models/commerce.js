'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commerce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //this.belongsToMany(models.Event, { through: models.Service });
      //this.belongsToMany(models.User, { through: models.Opinion });

    }
  };
  Commerce.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    type: {
      type: DataTypes.STRING,
      allowNull:false
    }, 
    city: {
      type: DataTypes.STRING,
      allowNull:false
    },
    number_votes: DataTypes.INTEGER,
    vote_average: DataTypes.FLOAT,
    review: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commerce',
  });
  return Commerce;
};