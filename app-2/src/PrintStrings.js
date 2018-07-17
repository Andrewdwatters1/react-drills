import React, { Component } from 'react';

class PrintStrings extends Component {
  constructor() {
    super() 
    this.state = {
      printed: ["string", "cheese", "is", "delicious"]
    }
  }

  render() {
    return (
      <div>
        <p> {this.state.printed[0]} </p>
        <p> {this.state.printed[1]} </p>
        <p> {this.state.printed[2]} </p>
        <p> {this.state.printed[3]} </p>
      </div>
    )
  }
}

export default PrintStrings;

