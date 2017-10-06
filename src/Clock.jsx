import React, { Component } from 'react';
import './app.css';
 class Clock extends Component {
   constructor(props){
     super(props);
    this.state={
      deadline:'',
      newDeadline: ''
    }
   }
   changeDeadline(){
     
   }
   render(){
     return(
       <div>
         <div className="Clock-days">14 Days</div>
         <div className="Clock-hours">30 Hours</div>
         <div className="Clock-mins">15 Mins</div>
         <div className="Clock-secs">20 Secs</div>
       </div>
     );
   }
 }

 export default Clock;
