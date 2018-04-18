import React from 'react';

const Button = (props) => {
return (
    <button className="Button" onClick={props.event}>
      {props.type}
    </button>
  )
}


export default Button;
