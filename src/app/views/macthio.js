import React, { Component } from 'react'
import Deck from '../components/Deck'
import Controller from '../components/Controller'
import Nav from '../components/Nav'

class MatchIO extends Component {

  state = {
    open: false
  }


  navHandler = () => {
    this.setState((ps) => ({
      open: !ps.open
    }))
  };

  render() {
    return (
      <div className="container ">
        <div className='matchio noSelect'>
          <Nav onClick={this.navHandler} open={this.state.open} />
          <Controller />
          <Deck />
        </div>
      </div>
    )
  }
}
export default MatchIO;