import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text-input';
import YesNo from './yes-no';

const Question = ({...props}) => (
  <fieldset id={props.id} className="question">
    <label className="question__title" htmlFor={props.id}>{props.label}</label>
    { props.yesNo ? <YesNo
          id={props.id}
          className="question__input"
          inputWidth={props.inputWidth}
          maxLength={2}
          type="text"
          value={props.value}
          onChange={props.onChange} /> :
      <TextInput
          id={props.id}
          className="question__input"
          inputWidth={props.inputWidth}
          maxLength={2}
          type="text"
          value={props.value}
          onChange={props.onChange}
        />
    }
  </fieldset>
)

Question.propTypes = {
  yesNo: PropTypes.number
}

Question.defaultProps = {
  yesNo: 0,
}

export default Question
