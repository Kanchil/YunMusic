import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './app/reducers';

import Home from './app/views/home';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <Stack key="root">
              <Scene key="home" component={ Home } hideNavBar={ true }/>
            </Stack>
        </Router>
      </Provider>
    );
  }
}
