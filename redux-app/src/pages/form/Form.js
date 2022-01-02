import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

const validate = values => {
  const errors = {};
  return errors;
};

const renderField = ({ label, input, type }) => (
  <div>
    <label className='label-cotrol'>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} className='form-control' />
    </div>
  </div>
);

let Form = () => {
  return (
    <div className='form'>
      <h3>Add new message</h3>
      <form>
        <div>
          <Field name="subject" label="subject" type="text" component={renderField} />
        </div>
        <div>
          <Field name="message" label="message" type="text" component={renderField} />
        </div>
        <div>
          <input type="submit" value="send" className="send" />
        </div>
      </form>
    </div>
  )
}

Form = reduxForm({
  form: "form",
  validate,
})(Form)

export default connect()(Form);
