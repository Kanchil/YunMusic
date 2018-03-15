import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Home from './app/views/home';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Stack key="root">
            <Scene key="home" component={ Home } hideNavBar={ true }/>
          </Stack>
      </Router>
    );
  }
}
