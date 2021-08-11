'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _isEmpty = require('./isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateRegisterForm(data) {
  var errors = {};

  data.fullName = !(0, _isEmpty2.default)(data.fullName) ? data.fullName : '';
  // data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  // data.role = !isEmpty(data.role) ? data.role : '';
  // data.username = !isEmpty(data.username) ? data.username : '';
  data.phone = !(0, _isEmpty2.default)(data.phone) ? data.phone : '';
  data.email = !(0, _isEmpty2.default)(data.email) ? data.email : '';
  data.password = !(0, _isEmpty2.default)(data.password) ? data.password : '';
  data.ConfirmPassword = !(0, _isEmpty2.default)(data.ConfirmPassword) ? data.ConfirmPassword : '';

  if (!_validator2.default.isLength(data.fullName, { min: 2, max: 60 })) {
    errors.fullName = 'Full name must be between 2 and 30 character long';
  }

  // if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
  //   errors.lastname = 'Last Name must be between 2 and 30 character long';
  // }

  if (_validator2.default.isEmpty(data.fullName)) {
    errors.fullName = 'Full Name field is required';
  }

  // if (Validator.isEmpty(data.lastname)) {
  //   errors.lastname = 'Last Name field is required';
  // }

  // if (Validator.isEmpty(data.role)) {
  //   errors.role = 'Role field is required';
  // }

  // if (Validator.isEmpty(data.username)) {
  //   errors.username = 'username field is required';
  // }

  if (_validator2.default.isEmpty(data.email)) {
    errors.email = 'email field is required';
  }

  if (!_validator2.default.isEmail(data.email)) {
    errors.email = 'email is invalid';
  }

  if (_validator2.default.isEmpty(data.password)) {
    errors.password = 'password field is required';
  }

  if (_validator2.default.isEmpty(data.ConfirmPassword)) {
    errors.ConfirmPassword = 'Confirm password field is required';
  }

  if (!_validator2.default.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'password must be at least 6 characters long';
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty2.default)(errors)
  };
};

exports.default = validateRegisterForm;