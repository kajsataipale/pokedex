import React, { Component } from 'react';
import PokeList from '../PokeList';
import Loading from '../Loading';

class PokeDex extends Component {

  state = {
    type: 'grass',
    pokemon: [],
  }

  componentDidMount = () => {
    const api = `http://pokeapi.salestock.net/api/v2/type/${this.state.type}`;

    fetch(api)
    .then(data => data.json())
    .then((json) => {
      this.setState({
        pokemon: json.pokemon,
      })
    })
  }

  render() {
    return (
      <div className="PokeDex">
       {
         this.state.pokemon.length ?
         <PokeList pokemon={this.state.pokemon} />
         : <Loading />
       }
      </div>
    );
  }

}

export default PokeDex;
