import React from 'react';
import TextInput from './text-input';

const convertToNumber = value => {
  if (typeof value === 'string') {
    if (value.slice(0, 1).toLowerCase() === 'y') {
      return 1;
    }

    if (value.slice(0, 1).toLowerCase() === 'n') {
      return 0;
    }
  }
};

const convertToString = value => {
  return value ? 'Yes' : 'No';
};

const YesNo = ({ ...props }) => {
  const handleYesNoChange = e => {
    if (e.target.hasOwnProperty('name')) {
      const name = e.target.name;
      const value = convertToNumber(e.target.value);

      props.onChange(name, value);
    }
  };

  return (
    <TextInput
      id={props.id}
      className="question__input"
      style={{ width: props.inputWidth }}
      maxLength={2}
      type="text"
      value={convertToString(props.value)}
      onChange={handleYesNoChange}
    />
  );
};

export default YesNo;
