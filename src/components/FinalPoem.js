import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {
  //it gets function that passes all the lines from Game
  console.log(props.data)
  const data = props.data

  const linesCollection = data.map((field) => {
      const key = field.key
      return key.value
    }).join( " ");

  return (

    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {linesCollection}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;

FinalPoem.propTypes = {
  outputLinesCallback: PropTypes.func.isRequired,
};
