import React, { Component } from 'react';


export default class Numbers extends Component {

  constructor() {
    super();
    this.state = {
      list: 0,
    };
  }



    upList= () =>{
      this.setState({ list: this.state.list + 1});
    }
    downList= () =>{
      this.setState({ list: this.state.list - 1});
    }
 
  render () {
    
    return (
      <div className='alignment-wrapper'>
        {this.state.list}
        <button onClick={() => this.upList("0")}>Up</button>
        <button onClick={() => this.downList("0")}>Down</button>
      </div>
    );
  }

}