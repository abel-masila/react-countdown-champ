import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render (){
    return (
      <div className="App">
        <div className="App-title">Countdown to Dec 25, 2017</div>
        <div>
          <div className="Clock-days">14 Days</div>
          <div className="Clock-hours">30 Hours</div>
          <div className="Clock-mins">15 Mins</div>
          <div className="Clock-secs">20 Secs</div>
        </div>
        <div>
          <input type="text" placeholder="New date" />
          <button>Submit</button>
        </div>
      </div>
    );
  };
}

 export default App;
