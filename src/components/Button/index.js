import React from 'react';
import './index.css'

const Button = (props) => {
return (
    <button className="Button" onClick={props.event}>
      {props.type}
    </button>
  )
}


export default Button;
