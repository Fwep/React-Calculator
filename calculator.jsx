import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      num1: '',
      num2: ''
    }

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num1})
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num2})
  }

  add(e) {
    e.preventDefault();
    this.setState({result: this.state.num1 + this.state.num2})
  }
  
  subtract(e) {
    e.preventDefault();
    this.setState({result: this.state.num1 - this.state.num2})
  }
  
  multiply(e) {
    e.preventDefault();
    this.setState({result: this.state.num1 * this.state.num2})
  }
  
  divide(e) {
    e.preventDefault();
    this.setState({result: this.state.num1 / this.state.num2})
  }

  clear(e) {
    e.preventDefault();
    this.setState({num1: "", num2: "", result: 0})
  }

  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <input 
          onChange={this.setNum1} 
          type="text" 
          value={num1}
        />

        <input
          onChange={this.setNum2}
          type="text"
          value={num2}
        />

        <br></br>

        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
};

export default Calculator;