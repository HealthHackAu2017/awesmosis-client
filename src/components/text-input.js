import React from 'react';

const TextInput = ({...props}) => (
  <input
      id={props.id}
      className="question__input"
      style={{ width: props.inputWidth }}
      maxLength={2}
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
)

export default TextInput
