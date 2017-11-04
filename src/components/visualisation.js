import React from 'react';
const VIS_HEIGHT = 140;

const Visualisation = props => {
  const fertility = props.data;
  const height = fertility * VIS_HEIGHT;
  const label = '';

  return (
    <div className="visualisation">
      <div className="visualisation__container">
        <div className="visualisation__inner" style={{ height: `${height}px` }}>
          <div className="visualisation__inner--label">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default Visualisation;
