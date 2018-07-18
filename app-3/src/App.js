import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruits: [
        "apples",
        "bananas",
        "cherries",
        "dates"
      ]
    }
  }


  render() {
    let fruitsDisplay = this.state.fruits.map((e, i) => {
      return (
        <p key={index}> {element}</p>
      );

    })
    
  }
}

export default App;
