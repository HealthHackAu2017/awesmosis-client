import React from 'react';
import TextInput from './text-input';

const YesNo = ({ ...props }) => (
  <div className="toggles">
    <div className="toggles__wrapper">
      <input name={props.id} id={`${props.id}-yes`} className="toggle__input toggle__input--yes" type="radio" value={1} onChange={props.onChange}/>
      <label className="toggle toggle__yes" htmlFor={`${props.id}-yes`}>Yes</label>
      <input name={props.id} id={`${props.id}-no`} className="toggle__input toggle__input--yes" type="radio" value={0} onChange={props.onChange}/>
      <label className="toggle toggle__no" htmlFor={`${props.id}-no`}>No</label>
    </div>
  </div>
);

export default YesNo;
