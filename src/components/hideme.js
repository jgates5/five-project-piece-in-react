import React, { Component } from 'react';


export default class HideMe extends Component {

  constructor(){
    super();
    this.state = {
      text: "Hide Me!",
      hideMe: true
    }
  }

  imInvisible = () => {
      if(this.state.hideMe && this.state.text) {
      this.setState({text : "", hideMe: false})
      console.log(this.state.hideMe && this.state.text)
      } else {
        this.setState({text : "Hide Me!", hideMe: true}) 
    
    }
  } 
  render () {
    return (
      <div className='alignment-wrapper'>
        <h1>{this.state.text}</h1>
        <button onClick={() => this.imInvisible('false')}>Click Me!</button>
      </div>    
    );
  }

}