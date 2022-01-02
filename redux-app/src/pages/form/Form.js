import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

const validate = values => {
  const errors = {};
  return errors;
};

let Form = () => {
  return (
    <div className='form'>
      <h1>Form</h1>
    </div>
  )
}

Form = reduxForm({
  form: "form",
  validate,
})(Form)

export default connect()(Form);
