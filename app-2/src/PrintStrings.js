import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class PrintStrings extends Component {
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
      <p key={i}> {e}</p>
      );
    })
    
    return (
      <div className="App">
      {fruitsDisplay}
      </div>
    )
  }
}

export default PrintStrings;

