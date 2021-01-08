import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: ''
  });

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

      const poemFields = props.fields.map(field => {
        const submittedFields = {...formFields};
        if(field.key) {
          return submittedFields[field.key];
        }
        else {
          return field
        }
      }).join(' ');

      props.sendSubmission(poemFields);

      setFormFields({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: '',
      });
    } 

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{props.index}</h3>
  
        <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>
  
          <div className="PlayerSubmissionForm__poem-inputs" >
            {
              props.fields.map((field, i)=> {
                if (field.key) {
                  return (
                    <input
                    key={field.key}
                    name={field.key}
                    placeholder={field.placeholder}
                    onChange={onInputChange}
                    value={formFields[field.key] || ''}
                    type='text'
                    className={!formFields[field.key] ? 'emptyField': 'populatedField'}
                    />)
                } else {
                  return field;
                }
              })
            }

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
