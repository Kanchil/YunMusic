/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {createStore,applyMiddleware} from 'redux';
import {connect,Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import Home from './containers/home';
import Login from './containers/login';
import Register from './containers/register';
import AlbumList from './containers/albumList';
import SongList from './containers/songList';
import LocalSongList from './containers/localSongList';
import LocalHome from './containers/localHome';
import Play from './containers/play';
import Search from './containers/search';
const store = createStore(reducer,applyMiddleware(thunk));
class YunMusic extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router header>
          <Scene key="home" component={Home} hideNavBar={true}/>
          <Scene key="login" component={Login} title="Login" hideNavBar={true}/>
          <Scene key="register" component={Register} title="Register" hideNavBar={true}/>
          <Scene key="albumList" component={AlbumList} title="歌单" hideNavBar={false} />
          <Scene key="songList" leftButtonIconStyle={{tintColor:'#333'}} component={SongList} title="歌曲列表" hideNavBar={false}/>
          <Scene key="localSongList" leftButtonIconStyle={{tintColor:'#333'}}
             component={LocalHome} title="本地音乐" hideNavBar={false}/>
          <Scene key="play" component={Play} title="播放" hideNavBar={true}/>
          <Scene key="search" component={Search} title="搜索" hideNavBar={true}/>
        </Router>
      </Provider>
    );
  }
}

export default YunMusic;
