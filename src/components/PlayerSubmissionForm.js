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
    const headerColor_adj1 = this.state.adj1 === '' ? "PlayerSubmissionFormt__input--invalid": "";
    const headerColor_noun1 = this.state.noun1 === '' ? "PlayerSubmissionFormt__input--invalid": "";
    const headerColor_adv = this.state.adv === '' ? "PlayerSubmissionFormt__input--invalid": "";
    const headerColor_verb = this.state.verb === '' ? "PlayerSubmissionFormt__input--invalid": "";
    const headerColor_adj2 = this.state.adj2 === '' ? "PlayerSubmissionFormt__input--invalid": "";
    const headerColor_noun2 = this.state.noun2 === '' ? "PlayerSubmissionFormt__input--invalid": "";

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.player}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onSubmitHandler}>

          <div>
            <span>The</span>
            <input className ={headerColor_adj1}
              name="adj1"
              placeholder="adjective"
              value = {this.state.adj1}
              onChange={this.onFieldChangeHandler}
              type="text" />
            <input className={headerColor_noun1}
              name="noun1"
              placeholder="noun"
              value = {this.state.noun1}
              onChange={this.onFieldChangeHandler}
              type="text" />
            <input className={headerColor_adv}
              name="adv"
              placeholder="adverb"
              value = {this.state.adv}
              onChange={this.onFieldChangeHandler}
              type="text" />
            <input className={headerColor_verb}
              name="verb"
              placeholder="verb"
              value = {this.state.verb}
              onChange={this.onFieldChangeHandler}
              type="text" />
            <span>the</span>
            <input
              name="adj2" className={headerColor_adj2}
              placeholder="adjective"
              value = {this.state.adj2}
              onChange={this.onFieldChangeHandler}
              type="text" />
            <input className={headerColor_noun2}
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
