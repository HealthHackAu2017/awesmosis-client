import React from 'react';
<<<<<<< HEAD
=======
import TextInput from './text-input';
>>>>>>> 5df705e0cae1c902ee24af121567e9a50b388b1a
import YesNo from './yes-no';

const YesNoQuestion = ({ ...props }) => (
  <fieldset id={props.id} className="question">
<<<<<<< HEAD
    <label className="question__title" htmlFor={props.id}>
      {props.label}
    </label>
    <YesNo
      id={props.id}
      className="question__input"
      inputWidth={props.inputWidth}
      maxLength={2}
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
    }
=======
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
>>>>>>> 5df705e0cae1c902ee24af121567e9a50b388b1a
  </fieldset>
);

export default YesNoQuestion;
