"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("chart", [
      {
        chart1: "[76,67,54,26,18]",
        chart2: "[134,32,15,2,1]",
        chart3: "[134,15,134,14,131,18,143,15]",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chart1: "[20,24,57,21,38]",
        chart2: "[77,6,75,27,8]",
        chart3: "[120,25,164,30,138,44,53,10]",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chart1: "[55,44,33,22,18]",
        chart2: "[100,111,112,80,90]",
        chart3: "[111,20,87,14,99,20,50,14]",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("chart", null, {});
  },
};
