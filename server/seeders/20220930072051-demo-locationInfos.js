"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "locationInfo",
      [
        {
          title: "그렉터",
          address: "서울특별시 송파구 올림픽로 82",
          lat: 37.511394,
          lng: 127.0796571,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "종합운동장",
          address: "서울특별시 송파구 올림픽로 25",
          lat: 37.5158376,
          lng: 127.0727986,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "롯데월드",
          address: "서울특별시 송파구 올림픽로 240",
          lat: 37.5088705,
          lng: 127.0999597,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("locationInfo", null, {});
  },
};
