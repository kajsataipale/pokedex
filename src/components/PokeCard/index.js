import React, { Component} from 'react';
import Loading from '../Loading';
import './index.css';

class PokeCard extends Component{
  state = {
    pokemon: {},
    loading: false,
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log(prevProps, prevState);
    if (prevProps !== this.props) {
    const api = `http://pokeapi.salestock.net/api/v2/pokemon/${this.props.pokemon}`;

    fetch(api)
    .then(data => data.json())
    .then((json) => {
      this.setState({
        loading: false,
        pokemon: json,
      })
    })
    }
}

  render(){
    const pokemon = this.state.pokemon;
    return(
      <div className="PokeCard">
        { JSON.stringify(pokemon) === "{}" ? <Loading /> :
          <div>
            <img alt="pokemonImage" src={pokemon.sprites.front_default} width="200px" />
            <h2>{pokemon.name}</h2>
          </div>
        }
      </div>

    )
  }
}


export default PokeCard;
