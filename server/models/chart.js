"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class chart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chart.init(
    {
      chart1: DataTypes.JSON,
      chart2: DataTypes.JSON,
      chart3: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "chart",
      freezeTableName: true,
    }
  );
  return chart;
};
