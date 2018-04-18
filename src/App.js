import React, { Component } from 'react';
import './App.css';
import PokeDex from './components/PokeDex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PokeDex />
      </div>
    );
  }
}

export default App;
