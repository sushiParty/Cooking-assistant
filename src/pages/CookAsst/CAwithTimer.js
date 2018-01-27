import React, { Component } from 'react';
import fire from '../.././fire';
import cookImg from '../../static/img/cook.gif';
import ReactCountdownClock from 'react-countdown-clock';


class CAwithTimer extends Component {

  constructor(props) {
    super();
    this.state = {
      paused: true,
      timeRemaining: 100,
      originalTime: 1000
    };

    this.pauseClock = this.pauseClock.bind(this);
    this.startClock = this.startClock.bind(this);
    this.reloadClock = this.reloadClock.bind(this);
  }

  componentWillMount

  startClock(){
    if(this.state.paused){
      this.setState({
        paused: false
      });
    }
  }

  pauseClock() {
    if(!this.state.paused){
      this.setState({
        paused: true
      });
    }
  }

  reloadClock() {
      this.setState({
        seconds: this.getNewSeconds()
      });
      console.log(this.state.originalTime);
      console.log(this.state.timeRemaining);
  }

  getNewSeconds = () => {
    //Note: This library only restart timer when we supply different seconds
    if(this.props.seconds !== this.state.seconds) {
      return this.props.seconds;
    } else {
      return this.props.seconds + 0.0000001;
    }
  }


  render() {

    return (

      <div className="CAwithTimer">

        <div>
          <h1> <strong> Word Instruction </strong> </h1>
        </div>

        <h2> Ingredients </h2>
        <li> things </li>
        <li> things </li>
        <li> things </li>
        <img src={cookImg} />

        <ReactCountdownClock seconds={this.state.timeRemaining}
                             color="#000"
                             alpha={0.9}
                             size={300}
                             weight={10}
                             paused={this.state.paused}
                             showMilliseconds = {false}
                            // onComplete={myCallback}
                             />

        <button type="button" className="ui button" onClick={this.startClock}> Start </button>
        <button type="button" className="ui button" onClick={this.pauseClock}> Pause </button>
        <button type="button" className="ui button" onClick={this.reloadClock}> Reset </button>

        <br />
        <br />
        <br />
        <button class="ui right labeled icon button">
          <i class="right arrow icon"></i>
          Next
        </button>

      </div>

    );
  }
}

export default CAwithTimer;
