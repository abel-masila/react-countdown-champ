import React, { Component } from 'react';
import './app.css';
 class Clock extends Component {
   constructor(props){
     super(props);
    this.state={
      days:0,
      hours:0,
      mins: 0,
      secs:0
    };
    //see if i got the prop from parent
    //console.log("this.props", this.props);
  }
  componentWillMount(){
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(()=> this.getTimeUntil(this.props.deadline),1000);
  }

  leadingZero(num){

     return num < 10 ? '0'+num : num;
  }
  getTimeUntil(deadline){
    const time=Date.parse(deadline)-Date.parse(new Date());
    const secs=Math.floor((time/1000)%60);
    const mins= Math.floor((time/1000/60)%60);
    const hours=Math.floor((time/(1000*60*60)%24));
    const days=Math.floor(time/(1000*60*60*24));

    this.setState({days,hours,mins,secs})
  }

   render(){

     return(
       <div>
         <div className="Clock-days">{this.leadingZero(this.state.days)} Days</div>
         <div className="Clock-hours">{this.leadingZero(this.state.hours)} Hours</div>
         <div className="Clock-mins">{this.leadingZero(this.state.mins)} Mins</div>
         <div className="Clock-secs"> {this.leadingZero(this.state.secs)} Secs</div>
       </div>
     );
   }
 }

 export default Clock;
