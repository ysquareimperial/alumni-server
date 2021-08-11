'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyToken = exports.SignIn = exports.SignUp = undefined;

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUp = function SignUp(req, res) {
    var _req$body = req.body,
        email = _req$body.email,
        firstName = _req$body.firstName,
        lastName = _req$body.lastName,
        password = _req$body.password,
        phone = _req$body.phone,
        imageUrl = _req$body.imageUrl;

    console.log(req.body);

    _models2.default.sequelize.query('SELECT  max(id) + 1 as id from signup ').then(function (result) {
        var maxId = result[0][0].id;
        console.log(maxId);

        _models2.default.sequelize.query('SELECT * from signup where email="' + email + '"').then(function (resp) {
            if (resp[0].length) {
                console.log('user exist');
                return res.status(400).json({ success: false, msg: 'email already registered' });
            } else {
                _bcryptjs2.default.genSalt(10, function (err, salt) {
                    _bcryptjs2.default.hash(password, salt, function (err, hash) {
                        if (err) throw err;
                        var newPass = hash;

                        _models2.default.sequelize.query('INSERT INTO signup (id, email, password, firstName, lastName, phone, imageUrl\n              ) VALUES \n              ("' + maxId + '", "' + email + '","' + password + '","' + firstName + '","' + lastName + '","' + phone + '","' + imageUrl + '"\n               )').then(function (results) {
                            _models2.default.sequelize.query('SELECT * from signup where email="' + email + '"').then(function (result) {
                                //   res.json({
                                //   status: "success",
                                //   result : result[]
                                // });
                                var user = result[0][0];
                                console.log(user);

                                var payload = {
                                    email: user.email
                                };
                                _jsonwebtoken2.default.sign(payload, "secret", {
                                    expiresIn: "1d"
                                }, function (err, token) {
                                    if (err) throw err;

                                    res.json({
                                        success: true,
                                        msg: 'Successfully logged in',
                                        token: token,
                                        user: user
                                    });
                                });
                            });
                        }).catch(function (err) {
                            console.log(err);
                            res.status(500).json({ status: "failed", err: err });
                        });
                    });
                });
            }
        });
    });
};

var SignIn = function SignIn(req, res) {
    var _req$body2 = req.body,
        phone = _req$body2.phone,
        password = _req$body2.password;


    _models2.default.sequelize.query('SELECT email, firstName, lastName, password, phone from \n\t\tsignup WHERE phone =  "' + phone + '"').then(function (result) {
        // console.log(req.body)
        if (!result[0].length) {
            res.status(400).json({
                success: false,
                msg: "user does not exits"

            });
            console.log("user does not exits");
        } else {
            console.log(result[0][0].email);

            var originalPassword = result[0][0].password;
            // console.log(password, originalPassword, '====')
            // bcrypt
            //     .compare(password, originalPassword)
            //     .then(isMatch => {
            // if (isMatch) {
            if (password === originalPassword) {
                console.log('matched!');
                var user = result[0][0];
                console.log(user);

                var payload = {
                    phone: user.phone
                };

                _jsonwebtoken2.default.sign(payload, "secret", {
                    expiresIn: "1d"
                }, function (err, token) {
                    if (err) throw err;

                    res.json({
                        success: true,
                        msg: 'Successfully logged in',
                        token: token,
                        user: user
                    });
                });
            } else {
                return res.status(400).json({ success: false, msg: 'Password not correct' });
            }
            // })

            // else{
            // 	res.json({
            // 		response : "Welcome back",
            // 		status : 200,
            // 		username : username,
            // 		result
            // 	})
            // 	console.log("success")
            // }
        }
    });
};

var verifyToken = function verifyToken(req, res) {
    var authToken = req.headers["authorization"];
    var token = authToken.split(" ")[1];
    console.log(authToken);

    _jsonwebtoken2.default.verify(token, 'secret', function (err, decoded) {
        if (err) {
            return res.json({ success: false, msg: 'Failed to authenticate token', err: err });
        }

        var phone = decoded.phone;


        _models2.default.sequelize.query('SELECT *  from signup where phone="' + phone + '"').then(function (result) {
            res.json({ success: true, user: result[0] });
        }).catch(function (err) {
            console.log(err);
            res.status(500).json({ status: "failed", err: err });
        });
    });
};

exports.SignUp = SignUp;
exports.SignIn = SignIn;
exports.verifyToken = verifyToken;