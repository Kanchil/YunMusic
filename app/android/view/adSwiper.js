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
import Swiper from 'react-native-swiper';
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
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Beautiful</Text>
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
    backgroundColor: '#FF824A',
  },
  slide2: {
    flex: 1,
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1D0D7',
  },
  slide3: {
    flex: 1,
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
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
  }
});

export default adSwiper;
