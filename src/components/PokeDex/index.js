import React, { Component } from 'react';
import PokeList from '../PokeList';
import Loading from '../Loading';
import Button from '../Button';
import './index.css';

class PokeDex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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
  }

  handleButton = (e) => {
    this.setState({
      loading: true,
    })
    const api = `http://pokeapi.salestock.net/api/v2/type/${e.target.textContent}`;

    fetch(api)
    .then(data => data.json())
    .then((json) => {
      this.setState({
        loading: false,
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
         this.state.loading ?
         <Loading /> :
         this.state.pokemon.length > 0 ?
         <PokeList pokemon={this.state.pokemon} click={this.props.handlePokeClick} /> :
           ''
       }
      </div>
    );
  }

}

export default PokeDex;
