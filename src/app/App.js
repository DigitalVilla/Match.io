import React, { Component } from 'react';
import Matchio from './views/macthio'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Matchio} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
