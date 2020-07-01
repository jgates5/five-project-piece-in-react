import React, { Component } from "react";


export default class Calculator extends Component {
  constructor() {
    super();

    this.state = {
   
      intEger: 0,
      newNumber: 0
    };

    this.punchedNumber = this.punchedNumber.bind(this);
  }

 
  punchedNumber(newEntry) {
    this.setState({intEger: newEntry})
    console.log(this.state.intEger)
 
  }


  newSetNumber= () => {
    this.setState({newNumber: event.target.value})
   
  }



  render () {
    return (

        
      <div className='calculator-wrapper'>   
       <input style={{count: this.state.NewNumber}} placeholder = '0' value={this.state.intEger} onChange={event => this.newSetNumber()}/>
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