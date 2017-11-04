import React from 'react';
import YesNo from './yes-no';

const YesNoQuestion = ({ ...props }) => (
  <fieldset id={props.id} className="question">
    <label className="question__title" htmlFor={props.id}>{props.label}</label>
      <YesNo
        id={props.id}
        name={props.id}
        className="question__input"
        inputWidth={props.inputWidth}
        maxLength={2}
        type="text"
        value={props.value}
        onChange={props.onChange} />
      <button type="button" className="big-button">&#62; &#62;</button>
  </fieldset>
);

export default YesNoQuestion;
