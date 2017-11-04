import React from 'react';
import TextInput from './text-input';
import { withHandlers } from 'recompose';

const convertValue = (value) => {
  if (typeof value === 'number') {
    console.info('Number');
    return value ? 'Yeah' : 'No'
  }

  if (typeof value === 'string') {
    if (value.slice(0, 1).toLowerCase() === 'y') {
      return 1;
    }

    if (value.slice(0, 1).toLowerCase() === 'n') {
      return 0;
    }
  }
}

const YesNo = ({...props}) => (
  <TextInput
      id={props.id}
      className="question__input"
      style={{ width: props.inputWidth }}
      maxLength={2}
      type="text"
      value={convertValue(props.value)}
      onChange={props.handleYesNoChange}
    />
)

const enhance = withHandlers({
  handleYesNoChange: (props) => (event) => {
    props.onChange(convertValue(event.target.value));
  }
})

export default enhance(YesNo)
