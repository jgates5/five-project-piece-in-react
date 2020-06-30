import React, { Component } from "react";


export default class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      // punchOn: show,
      intEger: 0,
      data: ""
    };
  }

  // punchedNumber = () => {
  //   this.setState({intEger: this.state.intEger})
   
  //   console.log(this.state.intEger)
  // }
  
punchedNumber(newEntry, array) {
  this.setState({intEger: newEntry})
  this.setState({data: array})
  console.log(this.state.intEger)
}

onClick


  render () {
    return (

        
      <div className='calculator-wrapper'>
       <input style={{count: this.state.intEger + this.state.data}} placeholder= '0' />
       <button onClick={() => this.punchedNumber("0")}>0</button>
       <button onClick={() => this.punchedNumber("1")}>1</button>
       <button onClick={() => this.punchedNumber("2")}>2</button>
       <button onClick={() => this.punchedNumber("3")}>3</button>
       <button onClick={() => this.punchedNumber("4")}>4</button>
       <button onClick={() => this.punchedNumber("5")}>5</button>
       <button onClick={() => this.punchedNumber("6")}>6</button>
       <button onClick={() => this.punchedNumber("7")}>7</button>
       <button onClick={() => this.punchedNumber("8")}>8</button>
       <button onClick={() => this.punchedNumber("9")}>9</button>
      </div>



    );
  }
}