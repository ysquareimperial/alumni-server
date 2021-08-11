"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
// const env = 'docInvidividual';
var env = process.env.NODE_ENV || "development";
// const env = process.env.NODE_ENV || 'production_opt';
// const env = process.env.NODE_E   NV || 'production';
// const env = process.env.NODE_ENV || 'test';

var config = require("../config/config.json")[env];

var db = {};

var sequelize = void 0;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
}).forEach(function (file) {
  var model = sequelize["import"](path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;