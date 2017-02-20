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
  ScrollView,
  View
} from 'react-native';
import AdSwiper from './adSwiper';
import Category from './category';
import Recommend from './recommend';
import New from './new';
import Exclusive from './exclusive';
class Music extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
          <AdSwiper />
          <Category />
          <Recommend />
          <New />
          <Exclusive />
          <View style={{backgroundColor:'#fff',height:40}}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
  },
});

export default Music;
