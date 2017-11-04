import React from 'react';

const Question = ({...props}) => (
  <fieldset className="question">
    <label className="question__title" htmlFor="age">{props.label}</label>
    <input className="question__input" style={{ width: props.inputWidth }} maxLength={2} id="age" type="text" value={props.value} onChange={props.onChange} />
  </fieldset>
)

export default Question
