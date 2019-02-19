import React, { Component } from 'react'
import Deck from '../components/Deck'
import Controller from '../components/Controller'

class MatchIO extends Component {
  render() {
    return (
      <div className="container ">
      <div className='matchio noSelect'>
        <Controller />
        <Deck />
      </div>
    </div>
    )
  }
}
export default  MatchIO;