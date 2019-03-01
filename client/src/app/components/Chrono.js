import React, { Component } from 'react'
import store from '../redux/store'
let pid;
export default class Chrono extends Component {
  state = {
    start: false,
    timer: {
      hrs: 0,
      min: 0,
      sec: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.start && nextProps.start === true)
      pid = setInterval(() => this.timer(), 1000)
    if (nextProps.stop === true)
      clearInterval(pid);
  }

  componentWillMount() {

  }

  formatter = () => {
    const { sec, min } = this.state.timer;
    const d2 = (n) => ("0" + n).slice(-2); //double digit
    // return `${d2(hrs)}:${d2(min)}:${d2(sec)}`
    return `${d2(min)}:${d2(sec)}`
  }

  timer = () => {
    this.setState((prevState) => { //prevState
      let { hrs, min, sec } = prevState.timer;
      sec++;
      min = sec === 60 ? min + 1 : min;
      hrs = min === 60 ? hrs + 1 : hrs;
      //cleanup
      sec = sec === 60 ? 0 : sec;
      min = min === 60 ? 0 : min;

      if (sec % 10 === 0) {
        store.dispatch({
          type: "TIME_UP",
          payload: {
            hrs,
            min,
            sec
          }
        })
      }

      return ({
        start: true,
        timer: {
          hrs,
          min,
          sec
        }
      })
    })
  }

  render() {
    return (
      <span>{this.formatter()}</span>
    )
  }
}
