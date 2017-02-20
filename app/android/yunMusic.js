/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Home from './view/home';
import Login from './view/login';
import Register from './view/register';
class YunMusic extends React.Component {
  render() {
    return (
        <Router>
          <Scene key="home" component={Home} hideNavBar={true}/>
          <Scene key="login" component={Login} title="Login" hideNavBar={true}/>
          <Scene key="register" component={Register} title="Register" hideNavBar={true}/>
        </Router>
    );
  }
}

export default YunMusic;
