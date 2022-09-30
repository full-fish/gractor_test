"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class locationInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  locationInfo.init(
    {
      title: DataTypes.STRING,
      address: DataTypes.STRING,
      lat: DataTypes.FLOAT(10, 7),
      lng: DataTypes.FLOAT(10, 7),
    },
    {
      sequelize,
      modelName: "locationInfo",
      freezeTableName: true,
    }
  );
  return locationInfo;
};
