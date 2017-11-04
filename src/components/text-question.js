import React from 'react';
import TextInput from './text-input';

const MAX_LENGTH = 2;
const INPUT_WIDTH = 130; // two characters;

const Question = ({ ...props }) => {
  return (
    <fieldset id={props.id} className="question">
      <label className="question__title" htmlFor={props.id}>
        {props.label}
      </label>
      <TextInput
        id={props.id}
        className="question__input"
        inputWidth={props.inputWidth ? props.inputWidth : INPUT_WIDTH}
        maxLength={props.maxLength ? props.maxLength : MAX_LENGTH}
        type="text"
        value={props.value}
        onChange={props.onChange}
        autoFocus={props.autoFocus}
      />
      <button type="button" className="big-button">&#62; &#62;</button>
    </fieldset>
  );
};

export default Question;
