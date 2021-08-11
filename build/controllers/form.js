'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchEventPictures = exports.fileUploader = exports.fetchEventList = exports.eventList = exports.fetchUserById = exports.fetchPayment = undefined;

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var cloudinary = require('../config/cloudinary');

var fetchPayment = function fetchPayment(req, res) {
  _models2.default.sequelize.query('SELECT * from signup').then(function (results) {
    res.json({
      status: "success",
      result: results[0]
    });

    // console.log(results[0]);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ status: "failed", err: err });
  });
};

var fetchUserById = function fetchUserById(req, res) {
  var id = req.params.id;

  _models2.default.sequelize.query('SELECT * from signup where phone = "' + id + '"').then(function (results) {
    res.json({
      status: "success",
      result: results[0]
    });

    // console.log(results[0]);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ status: "failed", err: err });
  });
};

var eventList = function eventList(req, res) {
  var _req$body = req.body,
      eventName = _req$body.eventName,
      venue = _req$body.venue,
      from = _req$body.from,
      to = _req$body.to,
      time = _req$body.time,
      otherInfo = _req$body.otherInfo,
      imageUrl = _req$body.imageUrl,
      theme = _req$body.theme;

  console.log(req.body);

  _models2.default.sequelize.query('SELECT  max(id) + 1 as id from event_list ').then(function (result) {
    var maxId = result[0][0].id;
    console.log(maxId);

    _models2.default.sequelize.query('INSERT INTO event_list (event_name, venue, \n      date_from, date_to, time, other_info, event_picture, theme\n ) VALUES \n      ( "' + eventName + '","' + venue + '","' + from + '",\n       "' + to + '","' + time + '","' + otherInfo + '", "' + imageUrl + '", "' + theme + '")').then(function (results) {
      res.json({
        status: "success",
        msg: "Event created successfully"
        // result: maxId,
        // results
      });
    }).catch(function (err) {
      console.log(err);
      res.status(500).json({ status: "failed", err: err });
    });
  });
};

var fetchEventList = function fetchEventList(req, res) {
  // const { id } = req.params;
  _models2.default.sequelize.query('SELECT * from event_list').then(function (results) {
    res.json({
      status: "success",
      result: results[0]
    });

    // console.log(results[0]);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ status: "failed", err: err });
  });
};

var fetchEventPictures = function fetchEventPictures(req, res) {
  var id = req.params.id;

  _models2.default.sequelize.query('SELECT * from event_pictures where event_name = "' + id + '"').then(function (results) {
    res.json({
      status: "success",
      result: results[0]
    });

    // console.log(results[0]);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({ status: "failed", err: err });
  });
};

var fileUploader = function fileUploader(req, res) {
  console.log(req.body);
  console.log(req.files);
  var files = req.files;
  var _req$body2 = req.body,
      user = _req$body2.user,
      event_name = _req$body2.event_name;

  console.log(JSON.stringify(req.files));
  files.forEach(function (item) {
    // db.sequelize
    //   .query(`SELECT  max(id) + 1 as id from event_pictures `)
    //   .then((result) => {
    //     let maxId = result[0][0].id;
    //     console.log(maxId);


    _models2.default.sequelize.query('INSERT INTO event_pictures ( imageUrl, user, event_name\n      \n ) VALUES \n      ( "' + item.path + '", "' + user + '", "' + event_name + '")').catch(function (err) {
      console.log(err);
      res.status(500).json({ status: "failed", err: err });
    });
  });

  res.json({
    status: "success",
    msg: "Event Pictures Posted successfully"
    // result: maxId, 
    // results
    // Hello
  });
};

exports.fetchPayment = fetchPayment;
exports.fetchUserById = fetchUserById;
exports.eventList = eventList;
exports.fetchEventList = fetchEventList;
exports.fileUploader = fileUploader;
exports.fetchEventPictures = fetchEventPictures;