'use strict';
module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define('test', {
    boogers: DataTypes.STRING,
    count: DataTypes.INTEGER,
    toolong: DataTypes.BOOLEAN
  }, {});
  test.associate = function(models) {
    // associations can be defined here
  };
  return test;
};