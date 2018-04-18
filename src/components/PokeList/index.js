import React from 'react';
import Pokemon from '../Pokemon';

const PokeList = (props) => {
  return (
    <div className="PokeList">
      {props.pokemon.map((item, index) => <Pokemon key={index} name={item.pokemon.name} />)}
    </div>
  )
}

export default PokeList;
