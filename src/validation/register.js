import Validator from 'validator';
import isEmpty from './isEmpty';

function validateRegisterForm(data) {
  let errors = {};

  data.fullName = !isEmpty(data.fullName) ? data.fullName : '';
  // data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  // data.role = !isEmpty(data.role) ? data.role : '';
  // data.username = !isEmpty(data.username) ? data.username : '';
  data.phone = !isEmpty(data.phone) ? data.phone : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.ConfirmPassword = !isEmpty(data.ConfirmPassword) ? data.ConfirmPassword : '';

  if (!Validator.isLength(data.fullName, { min: 2, max: 60 })) {
    errors.fullName = 'Full name must be between 2 and 30 character long';
  }

  // if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
  //   errors.lastname = 'Last Name must be between 2 and 30 character long';
  // }

  if (Validator.isEmpty(data.fullName)) {
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

  if (Validator.isEmpty(data.email)) {
    errors.email = 'email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'password field is required';
  }

  if (Validator.isEmpty(data.ConfirmPassword)) {
    errors.ConfirmPassword = 'Confirm password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'password must be at least 6 characters long';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateRegisterForm;