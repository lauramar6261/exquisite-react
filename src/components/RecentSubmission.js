import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const index = props.data.lines.length - 1
  const item = props.data.lines[index]
  const string = item? props.outputLinesCallback(item).join(" "): ""
  const title = item? "The Most Recent Submission":""

  console.log(string)
  return (
    <div className="RecentSubmission">
      <h3>{title}</h3>
      <p>{string}</p>
      <p className="RecentSubmission__submission">{  }</p>
    </div>
  );
}

export default RecentSubmission;
