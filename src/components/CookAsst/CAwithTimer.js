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
    };

    this.pauseClock = this.pauseClock.bind(this);
    this.startClock = this.startClock.bind(this);
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

        <button type="button" class="ui button" onClick={this.startClock}> Start </button>
        <button type="button" class="ui button" onClick={this.pauseClock}> Pause </button>

        <br />
        <br />
        <br />
        <button type="button" class="ui button" > Next </button>

      </div>

    );
  }
}

export default CAwithTimer;
