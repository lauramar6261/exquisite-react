import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    };
  }

  onFieldChangeHandler = (event, fieldToGetValueFrom = 'value') => {
    const updateState = {};

    const fieldName = event.target.name;
    const value = event.target[fieldToGetValueFrom];

    updateState[fieldName] = value;

    this.setState(updateState);
  }

  onSubmitHandler = (event)=> {
    event.preventDefault();
      this.props.addNewLineCallback(this.state);
      this.setState({
        adj1: '',
        noun1: '',
        adv: '',
        verb: '',
        adj2: '',
        noun2: '',
      });
  }

  render() {


    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.player}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            <span>The</span>
            <input
              name="adj1"
              placeholder="adjective"
              value = {this.state.adj1}
              onChange={this.onFieldChangeHandler}
              type="text" />
            <input
              name="noun1"
              placeholder="noun"
              value = {this.state.noun1}
              onChange={this.onFieldChangeHandler}
              type="text" />
            <input
              name="adv"
              placeholder="adverb"
              value = {this.state.adv}
              onChange={this.onFieldChangeHandler}
              type="text" />
            <input
              name="verb"
              placeholder="verb"
              value = {this.state.verb}
              onChange={this.onFieldChangeHandler}
              type="text" />
            <span>the</span>
            <input
              name="adj2"
              placeholder="adjective"
              value = {this.state.adj2}
              onChange={this.onFieldChangeHandler}
              type="text" />
            <input
              name="noun2"
              placeholder="noun"
              value = {this.state.noun2}
              onChange={this.onFieldChangeHandler}
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


PlayerSubmissionForm.propTypes = {
  addNewLineCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
