import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);
    super(props);
    this.state = {
      lines: [
      ],
      done: false
    }

  }

  onAddLine = (newLine) => {
    const { lines } = this.state;
    lines.push(newLine);
    this.setState({
      lines,
    });

  }

  onButtonClick = () => {
    this.setState({done: true});
  }

  outputLines = (field) => {
    const line = []
    line.push("The")
    line.push(field.adj1)
    line.push(field.noun1)
    line.push(field.adv)
    line.push(field.verb)
    line.push("the")
    line.push(field.adj2)
    line.push(field.noun2)
    return line
  }

  render() {
    //example of iterating over FIELDS
    console.log(this.state)
    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    const player = this.state.lines.length + 1
    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission data={this.state} outputLinesCallback={this.outputLines}/>

        <PlayerSubmissionForm addNewLineCallback={this.onAddLine} player={player}/>

        <FinalPoem onButtonClickCallback={this.onButtonClick} data={this.state} outputLinesCallback={this.outputLines}/>

      </div>
    );
  }
}

const FIELDS = [
  "The",
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
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
