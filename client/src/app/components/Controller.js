import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chrono from './Chrono'
import Icon from '../components/Icon'

let start = false;
const Controller = (props) => {
  const { turns, pairs } = props.game;
  start = props.game.flipped.icon && props.game.turns === 0;



  const setScore = () => {
    // this.setState((s) => ({ turns, pairs }))
    return 1000;
  };
  const d2 = (n) => ("0" + n).slice(-2); //double digit
  const score = setScore();

  return (
    <div className='controller'>
      <ul>
        <li><span>Score:</span><span>{score}</span> </li>
        <li><span>Time:</span><Chrono start={start} /></li>
        <li><span>Turns:</span><span>{d2(turns)}</span> </li>
        <li><span>Pairs:</span><span>{d2(pairs)}</span> </li>
      </ul>
      <div className='nav'>
        <span className='nav__btn'> </span>
        <div className="nav__bg">&nbsp;</div>
        <nav className="nav__nav">
          <ul className="nav__list">
            <li className="nav__item"></li>
            <li className="nav__item"></li>
            <li className="nav__item"></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps)(Controller);
