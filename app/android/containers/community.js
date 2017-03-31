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
  Image,
  View
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Util from '../utils/util';
import ShareSong from './shareSong';
class Community extends Component {
  render() {
      return (
        <ParallaxScrollView
          style={styles.parallax}
          backgroundColor="#f5f5f5"
          contentBackgroundColor="#fff"
          parallaxHeaderHeight={200}
          showsVerticalScrollIndicator={false}
          renderForeground={() => (
              <View style={styles.header}>
                <Image style={styles.hdBg} source={require('../images/dd.jpg')}>
                  <View style={styles.avatar}>
                    <Image style={styles.avatarImg} source={require('../images/korea.png')}></Image>
                  </View>
                  <View style={styles.hdBottom}>
                    <View style={{flexDirection:'row'}}>
                      <Text style={styles.nickname}>默默哒谬</Text>
                      <Text style={styles.rank}>Lv.8</Text>
                    </View>
                  </View>
                </Image>
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
  parallax:{
    width:Util.screen.width
  },
  hdBg:{
    width:Util.screen.width,
    height:200,
    justifyContent:'flex-end'
  },
  hdBottom:{
    height:40,
    justifyContent:'center',
    backgroundColor:'rgba(10,10,10,0.5)'
  },
  avatarImg:{
    width:60,
    height:60,
    marginBottom:5,
    marginLeft:15,
  },
  nickname:{
    color:'#fff',
    marginLeft:10,
    fontSize:14
  },
  rank:{
    width:40,
    height:20,
    borderRadius:5,
    borderColor:'#fff',
    borderWidth:Util.pixel * 2,
    fontSize:10,
    textAlign:'center',
    justifyContent:'center',
    top:-5,
    marginLeft:15,
    color:'#fff'
  },
});

export default Community;
