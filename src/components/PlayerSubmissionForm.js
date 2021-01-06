import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {

  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: ''
  })

  const onChange =(event) => {

    const newPoem = {
      ...formFields
    }
    console.log(newPoem);
    newPoem[event.target.name] = event.target.value;
    setFormFields(newPoem)
  }


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          <input
            name="adj1"
            placeholder="adjective" 
            type="text" 
            className="PlayerSubmissionForm__input--invalid" 
            value={formFields.adj1}
            onChange={onChange}
          />  
          <input 
            name="noun1"
            placeholder="noun" 
            type="text" 
            className="PlayerSubmissionForm__input--invalid" 
            value={formFields.noun1}
            onChange={onChange}
          />
          <input 
            name="adv"
            placeholder="adverb" 
            type="text" className="PlayerSubmissionForm__input--invalid" 
            value={formFields.adv}
            onChange={onChange}
          />
          <input 
            name="verb"
            placeholder="verb" 
            type="text" 
            className="PlayerSubmissionForm__input--invalid" 
            value={formFields.verb}
            onChange={onChange}
          />the
          <input 
            name="adj2"
            placeholder="adjective" 
            type="text" 
            className="PlayerSubmissionForm__input--invalid" 
            value={formFields.adj2}
            onChange={onChange}
          />
          <input 
            name="noun2"
            placeholder="noun" 
            type="text" 
            className="PlayerSubmissionForm__input--invalid" 
            value={formFields.noun2}
            onChange={onChange}
          />

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

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
