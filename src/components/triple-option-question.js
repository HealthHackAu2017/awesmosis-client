import React from 'react';

const TripleOptionQuestion = ({ ...props }) => (
  <fieldset id={props.id} className="question">
    <label className="question__title" htmlFor={props.id}>{props.label}</label>
    <div className="toggles toggles--three">
      <div className="toggles__wrapper">
        <input name={props.id} id={`${props.id}-one`} className="toggle__input toggle__input--one" type="radio" value={0} onChange={props.onChange}/>
        <label className="toggle toggle__one" htmlFor={`${props.id}-one`}>Under 3</label>

        <input name={props.id} id={`${props.id}-two`} className="toggle__input toggle__input--two" type="radio" value={1} onChange={props.onChange}/>
        <label className="toggle toggle__two" htmlFor={`${props.id}-two`}>Up to 10</label>

        <input name={props.id} id={`${props.id}-three`} className="toggle__input toggle__input--three" type="radio" value={2} onChange={props.onChange}/>
        <label className="toggle toggle__three" htmlFor={`${props.id}-three`}>More than 11</label>
      </div>
    </div>
  </fieldset>
);

export default TripleOptionQuestion;
