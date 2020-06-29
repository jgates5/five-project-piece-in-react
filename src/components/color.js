import React, { Component } from 'react';


export default class Color extends Component {

  constructor() {
    super();
    this.state = {
      colorMe: 'red',
      newColor: ""
    };
  }

  newSetColor = () => {
    this.setState({newColor: event.target.value})
   
  }

  colorFinder = () => {
 
    this.setState({colorMe: this.state.newColor})
    
  }
    
  
  render () {

    return (
      <div className='alignment-wrapper'>
        <form onSubmit={event => {event.preventDefault(); this.colorFinder()}}>
          <input placeholder="enter color" value={this.state.newColor} onChange={event => this.newSetColor()}/>
          <h1 style={{ color: this.state.colorMe}}>Color Me!</h1>
          <button>Submit</button>
        </form>

        
      
      </div>
    );
  }

}