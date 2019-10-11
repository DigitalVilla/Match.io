import React from 'react'
import { connect } from 'react-redux';
import Chrono from './Chrono'


const myState = {
  start: false,
  score: 1000,
  prevPair: 0,
  prevTurn: 0
}


const Controller = (props) => {
  const { turns, pairs, time, flipped, winner } = props.game;
  myState.start = flipped.icon && turns === 0;

  const setScore = () => {
    const { score, prevPair, prevTurn } = myState;

    if (prevPair !== pairs) {
      myState.prevPair = pairs;
      myState.score += 500;
    }

    if (prevTurn !== turns) {
      myState.prevTurn = turns;
      myState.score -= (turns * 2) + (time.sec * 1) + (time.min * 2) + (time.hrs * 10)
      if (score < 0) myState.score = 0;
    }
  };

  const d2 = (n) => ("0" + n).slice(-2); //double digit

  setScore();

  return (
    <div className='controller'>
      <ul>
        <li><span>Score:</span><span>{myState.score}</span> </li>
        <li><span>Time:</span><Chrono stop={winner} start={myState.start} /></li>
        <li><span>Turns:</span><span>{d2(turns)}</span> </li>
        <li><span>Pairs:</span><span>{d2(pairs)}</span> </li>
      </ul>
    </div>
  )
}


const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps)(Controller);
