import React from 'react';

const TextInput = ({ ...props }) => {
  return (
    <input
      id={props.id}
      name={props.id}
      className="question__input"
      style={{ width: props.inputWidth }}
      maxLength={props.maxLength}
      type="text"
      value={props.value}
      onKeyPress={props.onChange}
    />
  );
};

export default TextInput;
