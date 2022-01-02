import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { sendNewData } from '../../redux/actions/apiActions';

import './index.css';

const validate = values => {
  const { subject, message } = values;
  const errors = {}
  
  if (!subject) {
    errors.subject = "Required";
  } else if (subject?.length < 5) {
    errors.subject = "Minimun be 5 characters or more";
  }

  if (!message) {
    errors.message = "Required";
  } else if (message?.length < 5) {
    errors.message  = "Minimun be 5 characters or more";
  }

  return errors;
};

const renderField = ({ label, input, type, meta: { touched, error, warning } }) => (
  <div>
    <label className='label-cotrol'>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} className='form-control' />
      {touched && ((error && 
        <span className='text-danger'>{error}</span>) || (warning &&
        <span className='text-warning'>{warning}</span>))}
    </div>
  </div>
);

let Form = ({ responseOk, loading, sendNewData, handleSubmit }) => {

  const beforeSubmit = values => {
    values.user_id = 13;
    sendNewData(values);
  };

  return (
    <div className='content-form'>
      <h3>Add new message</h3>
      {loading && <p>Sending data....</p>}
      {responseOk && <p>Data sended successfully</p>}
      <form onSubmit={handleSubmit(beforeSubmit)}>
        <div>
          <Field name="subject" label="Subject" type="text" component={renderField} />
        </div>
        <div>
          <Field name="message" label="Message" type="text" component={renderField} />
        </div>
        <div>
          <input type="submit" value="Send" className="send" />
        </div>
      </form>
    </div>
  )
}

Form = reduxForm({
  form: "new",
  validate,
})(Form)

const mapStateToProps = state => ({
  responseOk: state.apiReducer.ok,
  loading: state.apiReducer.loading,
});

export default connect(mapStateToProps, { sendNewData })(Form);
