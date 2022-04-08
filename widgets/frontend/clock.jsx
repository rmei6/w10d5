import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date : new Date()};
    // debugger;
    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({date:new Date()});
  }

  componentDidMount(){
    this.id = setInterval(this.tick,1000);
  }

  componentWillUnmount(){
    clearInterval(this.id);
  }

  render(){
    return (
      <div className="clock">
        <h1>Clock</h1>
        <div className="box">
          <p className="time">
            <span>Time:</span> 
            <span>{this.state.date.toString().slice(16, 28)}</span>
          </p>
          <p className='date'> 
            <span>Date:</span>
            <span>{this.state.date.toString().slice(0, 15)}</span>
          </p>
        </div>
      </div>
      

    )
  }
}

export default Clock;