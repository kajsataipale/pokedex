import React, { Component} from 'react';
import Loading from '../Loading';
import './index.css';

class PokeCard extends Component{
  state = {
    loading: false,
    pokemon: {},
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.setState({
        loading: true,
      })
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
    console.log(pokemon);
    return(
      <div className="PokeCardWrapper">
        { this.state.loading ? <Loading /> :
          pokemon.hasOwnProperty('name') ?
          <div className="PokeCard">
            <img className="PokemonImage" alt="PokemonImage" src={pokemon.sprites.front_default} width="200px" />
            <h2>{pokemon.name}</h2>
            <hr></hr>
            <ul className="PokeStats">
              <li><strong>HP: </strong>{pokemon.stats[5].base_stat}</li>
              <li><strong>Attack: </strong>{pokemon.stats[4].base_stat}</li>
              <li><strong>Defense: </strong>{pokemon.stats[3].base_stat}</li>
            </ul>
          </div> :
          ''
        }
      </div>

    )
  }
}


export default PokeCard;
