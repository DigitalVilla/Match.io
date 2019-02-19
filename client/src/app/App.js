import React, { Component } from 'react';
import Matchio from './views/Matchio'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import  store  from './redux/store';


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
