import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

import { styles } from './index.style';

class AlbumList extends Component{
  render(){
    return (
        <View style={styles.container}>
          <View style={styles.itemTop}><Text style={styles.topTitle}>全部歌单</Text></View>
          <View style={styles.itemList}>
            <View style={styles.item}>
              <TouchableHighlight  style={styles.radius} activeOpacity={0.4} underlayColor="#4B3E4D">
                <Image style={styles.itemThumb} source={require('../../assets/images/dd.jpg')}>
                  <View style={styles.listen}>
                    <Icon name="md-headset" size={10} color="#fff"></Icon>
                    <Text style={styles.listenerNum}>23万</Text>
                  </View>
                  <View style={styles.author}>
                    <Icon name="md-person" size={15} color="#fff"></Icon>
                    <Text style={styles.authorName}>橘子不是唯一水果</Text>
                  </View>
                </Image>
              </TouchableHighlight>
              <Text style={styles.itemText}>[华语] 愿时光满地，许我--莫相惜</Text>
            </View>
            <View style={styles.item}>
              <TouchableHighlight  style={styles.radius} activeOpacity={0.4} underlayColor="#4B3E4D">
                <Image style={styles.itemThumb} source={require('../../assets/images/dd.jpg')}>
                  <View style={styles.listen}>
                    <Icon name="md-headset" size={10} color="#fff"></Icon>
                    <Text style={styles.listenerNum}>23万</Text>
                  </View>
                  <View style={styles.author}>
                    <Icon name="md-person" size={15} color="#fff"></Icon>
                    <Text style={styles.authorName}>橘子不是唯一水果</Text>
                  </View>
                </Image>
              </TouchableHighlight>
              <Text style={styles.itemText}>[华语] 愿时光满地，许我--莫相惜</Text>
            </View>
            <View style={styles.item}>
              <TouchableHighlight  style={styles.radius} activeOpacity={0.4} underlayColor="#4B3E4D">
                <Image style={styles.itemThumb} source={require('../../assets/images/dd.jpg')}>
                  <View style={styles.listen}>
                    <Icon name="md-headset" size={10} color="#fff"></Icon>
                    <Text style={styles.listenerNum}>23万</Text>
                  </View>
                  <View style={styles.author}>
                    <Icon name="md-person" size={15} color="#fff"></Icon>
                    <Text style={styles.authorName}>橘子不是唯一水果</Text>
                  </View>
                </Image>
              </TouchableHighlight>
              <Text style={styles.itemText}>[华语] 愿时光满地，许我--莫相惜</Text>
            </View>
          </View>
        </View>
    )
  }
}


export default AlbumList;
