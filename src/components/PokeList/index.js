import React from 'react';
import Pokemon from '../Pokemon';
import './index.css';

const PokeList = (props) => {
  return (
    <div className="PokeList">
      {props.pokemon.map((item, index) => <Pokemon key={index} name={item.pokemon.name} click={props.click}/>)}
    </div>
  )
}

export default PokeList;
