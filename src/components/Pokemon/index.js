import React from 'react';
import './index.css';

const Pokemon = (props) => {
  return (
    <div className="Pokemon" onClick={props.click}>
      {props.name}
    </div>
  )
}

export default Pokemon;
