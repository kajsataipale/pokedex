import React, { Component } from 'react';
import PokeList from '../PokeList';
import Loading from '../Loading';
import Button from '../Button';
import './index.css';

class PokeDex extends Component {

  state = {
    type: '',
    types: [
      'grass',
       'water',
       'fire',
       'electric',
       'flying',
       'poison',
       'normal',
       'ground',
          ],
    pokemon: [],
  }

  handleButton = (e) => {
    this.setState({
      type: e.target.textContent,
      pokemon: [],
    })
  }

  componentDidUpdate = () => {
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
        <div className="ButtonWrapper">
          {
            this.state.types.map((item, index) => (
              <Button key={index} type={item} event={this.handleButton}/>
            ) )
          }
        </div>
       {
         this.state.pokemon.length ?
         <PokeList pokemon={this.state.pokemon} click={this.props.handlePokeClick} />
         : <Loading />
       }
      </div>
    );
  }

}

export default PokeDex;
