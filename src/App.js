import React, { Component } from 'react';
import './App.css';
import PokeDex from './components/PokeDex';
import PokeCard from './components/PokeCard';

class App extends Component {

  state = {
    pokemon: '',
  }

  handlePokeClick = (e) => {
    this.setState({
      pokemon: e.target.textContent,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="BlueThing"></div>
        <header className="AppHeader">
          <h1 className="AppTitle">Pokedex</h1>
        </header>
        <main>
          <PokeCard pokemon={this.state.pokemon} />
          <PokeDex handlePokeClick={this.handlePokeClick} />
        </main>
      </div>
    );
  }
}

export default App;
