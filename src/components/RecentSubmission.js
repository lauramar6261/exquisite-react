import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  const index = props.data.lines.length - 1
  const item = props.data.lines[index]
  let string = ""
  let title =""
  if (item !== undefined && props.data.done === false ) {
    string = props.outputLinesCallback(item).join(" ")
    title = "The Most Recent Submission"
  } else {
    title = ""
    string = ""
  }

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
