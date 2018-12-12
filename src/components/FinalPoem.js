import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
  console.log(props.data)


  return (

    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <p> {props.data.done ? props.data.lines.map((line) => <div>{props.outputLinesCallback(line).join(" ")}</div>) : ""}</p>

      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.onButtonClickCallback} />
      </div>
    </div>
  );
}

export default FinalPoem;

FinalPoem.propTypes = {
  outputLinesCallback: PropTypes.func.isRequired,
};
