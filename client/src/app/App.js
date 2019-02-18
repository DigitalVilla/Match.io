import React, { Component } from 'react';
import Deck from './components/Deck'
import Controller from './components/Controller'
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container noSelect">
        <div className='memorax'>
          <Controller />
          <Deck />
        </div>
      </div>
    )
  }
}

export default App;
