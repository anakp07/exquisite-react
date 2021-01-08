import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({sendSubmission, index, fields}) => {

  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: ''
  })

  const onInputChange =(event) => {

    const {name, value} = event.target; 
    
    const newFormFieldValues = {
      ...formFields,
    }

    newFormFieldValues[name] = value;
    setFormFields(newFormFieldValues);
  };

    const onFormSubmit = (event) => {
      event.preventDefault();

      sendSubmission(formFields);

      setFormFields({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: '',
      });
    } 

    const poemFields = fields.map((field, i)=> {
      if(field === 'string'){
        return (
          <div key={i}>
            {field}
            </div>
        )
      }
      else {
        return (
        <div key={i}>
          <input name={field.key} type='text' placeholder={field.placeholder} value={formFields[field.key]} onChange={onInputChange} />
        </div>
        )
      }
    });
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{index}</h3>
  
        <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>
  
          <div className="PlayerSubmissionForm__poem-inputs" >
            {poemFields}

          </div>
          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );

  };


PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
