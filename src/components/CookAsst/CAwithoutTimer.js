import React, { Component } from 'react';
import fire from '../.././fire';
import cookImg from '../../static/img/cook.gif';


class CAwithoutTimer extends Component {
  render() {

    return (
      <div className="CAwithoutTimer">

        <div>
          <h1> <strong> Word Instruction </strong> </h1>
        </div>

        <h2> Ingredients </h2>
        <li> things </li>
        <li> things </li>
        <li> things </li>
        <img src={cookImg} />
        <br />
        <button type="button"> Next </button>

      </div>

    );
  }
}

export default CAwithoutTimer;
