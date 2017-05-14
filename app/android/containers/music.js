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
class Music extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
          <AdSwiper />
          <Category />
          <Recommend title="影视金曲" listType="4" />
          <Recommend title="最新单曲" listType="5" />
          <Recommend title="欧美金曲" listType="6" />
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
