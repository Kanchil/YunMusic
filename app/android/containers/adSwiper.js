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
import Swiper from 'react-native-swiper';
import Util from '../utils/util';
class adSwiper extends Component {
  render() {
    return (
    <View>
      <Swiper height={180}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.paginationStyle}
         autoplay
         loop>
        <View style={styles.slide1}>
          <Image style={styles.adImg} source={require('../images/lun1.jpg')}>
            <Text style={styles.text}>【高燃】 游戏原声集锦</Text>
          </Image>
        </View>
        <View style={styles.slide2}>
          <Image style={styles.adImg} source={require('../images/lun2.jpg')}>
            <Text style={styles.text}>朗月清风 笙歌满路</Text>
          </Image>
        </View>
        <View style={styles.slide3}>
          <Image style={styles.adImg} source={require('../images/lun3.jpg')}>
            <Text style={styles.text}>那些年追过的动漫音乐精选</Text>
          </Image>
        </View>
      </Swiper>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 13,
    width:Util.screen.width - 40,
    height:30,
    textAlign:'right',
    marginBottom:20,
    marginRight:20,
  },
  dot:{
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  activeDot:{
    backgroundColor: '#4B3E4D',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  paginationStyle:{
    bottom: 5,
    left: null,
    right: 10
  },
  adImg:{
    height:200,
    width:Util.screen.width,
    justifyContent:'flex-end',
    alignItems:'flex-end',
  }
});

export default adSwiper;
