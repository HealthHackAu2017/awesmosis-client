import React from 'react';

const TextInput = ({ ...props }) => {
  return (
    <input
      id={props.id}
      name={props.name}
      className="question__input"
      style={{ width: props.inputWidth }}
      maxLength={2}
      type="text"
      value={props.value}
      onKeyPress={props.onChange}
    />
  );
};

export default TextInput;
