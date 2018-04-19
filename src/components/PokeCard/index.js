import React, { Component} from 'react';
import Loading from '../Loading';
import './index.css';

class PokeCard extends Component{
  state = {
    pokemon: {},
  }

  componentDidUpdate = () => {
    this.setState({
      pokemon:{}
    })
    const api = `http://pokeapi.salestock.net/api/v2/pokemon/${this.props.pokemon}`;

    fetch(api)
    .then(data => data.json())
    .then((json) => {
      this.setState({
        pokemon: json,
      })
    })
  }


  render(){
    const pokemon = this.state.pokemon;
    console.dir(Object.prototype);
    return(
      <div className="PokeCard">
        { JSON.stringify(pokemon) === "{}" ? <Loading /> :
        <div>
          <img alt="pokemonImage" src={pokemon.sprites.front_default} width="200px" />
          <h2>{pokemon.name}</h2>
        </div>

        }
         {console.log(pokemon)}
      </div>

    )
  }
}


export default PokeCard;
