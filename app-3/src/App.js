import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      fruits: [
        "apples",
        "bananas",
        "cherries",
        "dates"
      ],
      filterString: "",
    }
  }

  handleChange(filter) {
    this.setState({
      filterString: filter
    })
  }
    
  

  render() {
    let fruitsDisplay = this.state.fruits.filter((e, i) => {
      return e.includes(this.state.filterString);
    }).map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })
      return (
        <div className="App">
          <input placeholder="filter fruits" onChange={(e) => this.handleChange(e.target.value)} type="text" ></input>
          <p> {fruitsDisplay} </p>
        </div>
      )
    }
  }

export default App;
