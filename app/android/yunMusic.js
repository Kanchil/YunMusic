/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Scene, Router,Modal, Schema} from 'react-native-router-flux';
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
import Favorite from './containers/favorite';
import Message from './containers/message';
const store = createStore(reducer,applyMiddleware(thunk));
class YunMusic extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router header>
          <Scene key="home" component={Home} hideNavBar={true}/>
          <Scene key="login" leftButtonIconStyle={{tintColor:'#333'}} component={Login} title="账号管理" hideNavBar={false}/>
          <Scene key="register" leftButtonIconStyle={{tintColor:'#333'}} component={Register} title="账号注册" hideNavBar={true}/>
          <Scene key="favorite" leftButtonIconStyle={{tintColor:'#333'}} component={Favorite} title="我的音乐云" hideNavBar={false}/>
          <Scene key="message" leftButtonIconStyle={{tintColor:'#333'}} component={Message} title="我的消息" hideNavBar={false}/>
          <Scene key="albumList" leftButtonIconStyle={{tintColor:'#333'}} component={AlbumList} title="歌单" hideNavBar={false} />
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
