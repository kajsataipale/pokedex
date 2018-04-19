import React, { Component } from 'react';
import './App.css';
import PokeDex from './components/PokeDex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokedex</h1>
        </header>
        <div class="section-one">
        </div>
        <div class="section-two">
          <PokeDex />
        </div>
      </div>
    );
  }
}

export default App;
