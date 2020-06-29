import React, { Component } from 'react';




export default class Toggle extends Component {

  constructor(props){
    super(props);
    this.state = {
      alignment: "left",
    };
  }

  newAlignment(aligned) {
    this.setState({alignment: aligned})
  }




  render() {
    return (
      <div className='alignment-wrapper'>
      <h1 style={{textAlign: this.state.alignment}}> Align me</h1>
        <button onClick={() => this.newAlignment("left")}>Left</button>
        <button onClick={() => this.newAlignment("center")}>Center</button>
        <button onClick={() => this.newAlignment("right")}>Right</button>
      </div>
    );
  }
}


