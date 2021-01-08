import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  // game component will keep track of the various submissions 

  const [submission, setSubmission] = useState ([]); 
  const [submitted, setSubmitted] = useState(false);
  const [player, setPlayer] = useState(1); 
 

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const addSubmissionInput = (input) => {
    const newFormValues = [...submission];

    const submissionInput = FIELDS.map((field)=> {
      if (field.key) {
        return input[field.key]
      }
      else {
        return field
      }
    }).join(' ')
    newFormValues.push(submissionInput);
    setSubmission(newFormValues);
    setPlayer(player); 
  };
    
  const revealLastSubmission = submission[submission.length -1]

  const revealPoem = () => {
    setSubmitted(true);
  };

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {(submitted) || (submission.length === 0 )? null: <RecentSubmission submission={revealLastSubmission} />} 

      {submitted ? null: <PlayerSubmissionForm sendSubmission={addSubmissionInput} index={player} fields={FIELDS} />}

      <FinalPoem  isSubmitted={submitted} submissions={submission} revealPoem={revealPoem}/>
    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
