/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Util from '../utils/util';
import ShareSong from './shareSong';
class Community extends Component {
  render() {
      return (
        <ParallaxScrollView
          style={styles.container}
          backgroundColor="#A5AAD9"
          contentBackgroundColor="#fff"
          parallaxHeaderHeight={200}
          renderForeground={() => (
           <View style={{ height: 200, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{color:'#fff'}}>个人信息区域</Text>
            </View>
          )}>
          <View style={{backgroundColor:'#f5f5f5'}}>
            <ShareSong />
            <ShareSong />
            <ShareSong />
          </View>
        </ParallaxScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:Util.screen.width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Community;
