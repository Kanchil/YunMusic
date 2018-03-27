import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './app/reducers';

import Home from './app/views/home';
import Login from './app/views/login';
import Register from './app/views/register';
import SongList from './app/views/songList';
import Play from './app/views/play';
import LocalHome from './app/views/localHome';
import Search from './app/views/search';
import AlbumList from './app/views/albumList';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <Stack key="root">
              <Scene key="home" component={ Home } hideNavBar={ true }/>
              <Scene key="login" 
                leftButtonIconStyle={{tintColor:'#333'}} 
                component={Login} 
                title="账号管理" 
                hideNavBar={false} />
              <Scene 
                key="register" 
                leftButtonIconStyle={{tintColor:'#333'}} 
                component={Register} 
                title="账号注册" 
                hideNavBar={true} />
              <Scene key="songList" 
                    leftButtonIconStyle={{ tintColor:'#333' }} 
                    component={ SongList }  
                    title="歌曲列表" 
                    hideNavBar={ false } />
              <Scene key="albumList" 
                    leftButtonIconStyle={{tintColor:'#333'}} 
                    component={AlbumList} 
                    title="歌单" 
                    hideNavBar={false} />
              <Scene key="play" 
                    component={Play} 
                    title="播放" 
                    hideNavBar={true} />
                <Scene key="localSongList"
                       leftButtonIconStyle={{tintColor:'#333'}}
                       component={LocalHome}
                       title="本地音乐" 
                       hideNavBar={false} />
                <Scene key="search" component={Search} title="搜索" hideNavBar={true}/>
            </Stack>
        </Router>
      </Provider>
    );
  }
}
