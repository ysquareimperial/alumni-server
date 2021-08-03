import Validator from 'validator';
import isEmpty from './isEmpty';

function validateLoginForm(data) {
  let errors = {};

  data.phone = !isEmpty(data.phone) ? data.phone : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isPhone(data.phone)) {
    errors.phone = 'Phone number is invalid';
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'Phone number is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateLoginForm