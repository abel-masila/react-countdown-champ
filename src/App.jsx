import React, { Component } from 'react';
import './app.css';
import { Form, FormControl, Button } from 'react-bootstrap';
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

        <Clock deadline={this.state.deadline}/>
        <Form inline >
          <FormControl className="Deadline-Input" type="text" placeholder="New date" onChange={event=> this.setState({newDeadline: event.target.value})} />
          <Button onClick={()=> this.changeDeadline() }>Submit</Button>
        </Form>
      </div>
    );
  };
}

 export default App;
