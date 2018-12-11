import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    console.log(props.data)
    super(props);
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }
  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
          {

          }
            <span>The</span>
            <input
              placeholder="adjective"
              type="text" />
            <input placeholder="noun" type="text" />
            <input
              placeholder="adverb"
              type="text" />
            <input
              placeholder="verb"
              type="text" />
            <span>the</span>
            <input
              placeholder="adjective"
              type="text" />
            <input
              placeholder="noun"
              type="text" />
            <span>.</span>
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
