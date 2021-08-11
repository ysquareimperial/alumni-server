'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    confirmPassword: DataTypes.STRING
  }, {});

  User.associate = function (models) {
    // associations go here
  };

  return User;
};