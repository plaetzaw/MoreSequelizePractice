"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameTable("tests", "Godzilla");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameTable("Godzilla", "tests");
  }
};
