
// 1) User clicks first number, store in integer, show number ---
// 2) User clicks plus or minus, store user choice, ---
// 3) User clicks second number, store first number in newNum, store second number in intEger, show intEger
// 4) User clickes equals button, perform doOpration, show total



import React, { Component } from "react";



export default class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      intEger: 0,
      newNumber: 0,
      operation: ""
    };

    this.punchedNumber = this.punchedNumber.bind(this);
  }

 
  punchedNumber(newEntry) {
    let tempNumber = this.state.intEger;
    this.setState({
      intEger: newEntry, 
      newNumber: tempNumber,
    });
  }



  operationPlus = () => {
    this.setState({operation: "plus"})
  }


  operationMinus = () => {
    this.setState({operation: "minus"})
  }

  doOperation = () => {
    let total = 0;
    if(this.state.operation == "plus"){
      total = (+this.state.intEger) + (+this.state.newNumber);
    } else if (this.state.operation == "minus"){
      //TODO: the line after this is a problem, can you tell me why?
      total = +this.state.intEger - +this.state.newNumber;
    }
    //return "total";
    //TODO: There is a problem - you need to add a line here
    //Add something here to fix it
    this.setState({intEger:total})
    
  }



  render () {
   
    return (
      <div className='calculator-wrapper'>
        {this.state.operation}
       <input placeholder = '0' value={this.state.intEger}/>
       <button onClick={() => this.doOperation()}>Equals</button>
       <button onClick={() => this.operationPlus()}>Plus</button>
       <button onClick={() => this.operationMinus()}>Minus</button>
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
    //[1,2,3,4,5].map()
  }
}