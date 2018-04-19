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
        <header className="App-header">
          <h1 className="App-title">Pokedex</h1>
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
