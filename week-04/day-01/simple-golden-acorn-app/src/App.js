import React, { Component } from 'react';
import './App.css';
import Button from './button';
import Display from './display';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfAcorn: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleIncrement() {
    this.setState({numOfAcorn: this.state.numOfAcorn + 1});
  }

  handleDecrease() {
    if(this.state.numOfAcorn > 0) {
      this.setState({numOfAcorn: this.state.numOfAcorn - 1});
    }
  }

  keyPress(event) {
    if (event.key==="ArrowUp"){
      this.handleIncrement();
    }
    if (event.key==="ArrowDown"){
      this.handleDecrease();
    }
  }

  render() {
    return (
      <React.Fragment>
        {document.addEventListener('keydown',this.keyPress)}
        <Button onClick={this.handleIncrement} text="Buy one"/>
        <Display>{this.state.numOfAcorn}</Display>
        <Button onClick={this.handleDecrease} text="Eat one"/>
      </React.Fragment>    
      )
  }
}
export default App;
