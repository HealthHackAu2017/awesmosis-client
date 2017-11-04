import React from 'react';
import TextInput from './text-input';
import YesNo from './yes-no';

const Question = ({ ...props }) => (
  <fieldset id={props.id} className="question">
    <label className="question__title" htmlFor={props.id}>{props.label}</label>
    <TextInput
        id={props.id}
        name={props.id}
        className="question__input"
        inputWidth={props.inputWidth}
        maxLength={2}
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
  </fieldset>
);

export default Question;
