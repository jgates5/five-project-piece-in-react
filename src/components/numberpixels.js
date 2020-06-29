import React, { Component } from 'react';


export default class NumberPixels extends Component {

  constructor() {
    super();
    this.state = {
      list: 0,
      pixels: 12
    };
  }


    upList= () => {
      this.setState({list: this.state.list + 1});
      this.setState({pixels: this.state.pixels + 4});
    }
    downList= () => {
      this.setState({ list: this.state.list - 1});
      this.setState({pixels: this.state.pixels - 4})
   
    }
  render () {
    
    return (
      <div className='alignment-wrapper'>
        {this.state.pixels + "px"}
        <input placeholder= {this.state.list} />
        <button onClick={() => this.upList()}>Up</button>
        <button onClick={() => this.downList()}>Down</button>
      

      </div>
    );
  }

}