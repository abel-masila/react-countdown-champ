import React, { Component } from 'react';
import './app.css';
import Clock from './Clock';

class App extends Component {
  //Set state
  constructor(props){
    super(props);
    this.state={
      deadline: 'December 25, 2017',
      newDeadline : ''
    }
  }
  //Change state dynamically
  //You SHOULD NEVER mutate state
  changeDeadline(){
    this.setState({deadline: this.state.newDeadline});
  }
  render (){
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock />
        <div>
          <input type="text" placeholder="New date" onChange={event=> this.setState({newDeadline: event.target.value})} />
          <button onClick={()=> this.changeDeadline() }>Submit</button>
        </div>
      </div>
    );
  };
}

 export default App;
