import React, { Component } from 'react';

class TextType extends Component {
  constructor() {
    super() 
    this.state = {
      userInput: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }
  render() {
    return(
      <div>
        <input onChange={this.handleChange}></input>
        <p> {this.state.userInput} </p>
      </div>
    )
  }
}
export default TextType
