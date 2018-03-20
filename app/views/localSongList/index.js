import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { styles } from './index.style';
class LocalSongList extends Component{
  render(){
    return (
      <View style={styles.container}>
        <ParallaxScrollView style={styles.parallax} parallaxHeaderHeight={0} showsVerticalScrollIndicator={false} >
          <View style={{backgroundColor:'#fff'}}>
            <View style={styles.top}>
              <Icon style={styles.optionIcon} name="md-play" size={26} color="#333"></Icon>
              <View style={styles.headerCon}>
                <Text style={styles.playAll}>播放全部</Text>
                <Text style={styles.songsNum}>共3首</Text>
              </View>
              <Icon style={styles.optionIcon} name="md-options" size={26} color="#999"></Icon>
            </View>
            <View style={styles.songItem}>
              <Text style={styles.songOrder}>1</Text>
              <View style={styles.songRight}>
                <View style={styles.songInfo}>
                  <Text style={styles.songTitle}>We Are Powerful</Text>
                  <Text style={styles.songAuthor}>Lenka - The Bright Slide</Text>
                </View>
                <Icon style={styles.optionIcon} name="md-more" size={25} color="#999"></Icon>
              </View>
            </View>
            <View style={styles.songItem}>
              <Icon style={styles.songIcon} name="md-volume-up" size={25} color="#DBD8A2"></Icon>
              <View style={styles.songRight}>
                <View style={styles.songInfo}>
                  <Text style={styles.songTitle}>We Are Powerful</Text>
                  <Text style={styles.songAuthor}>Lenka - The Bright Slide</Text>
                </View>
                <Icon style={styles.optionIcon} name="md-more" size={25} color="#999"></Icon>
              </View>
            </View>
            <View style={styles.songItem}>
              <Text style={styles.songOrder}>3</Text>
              <View style={styles.songRight}>
                <View style={styles.songInfo}>
                  <Text style={styles.songTitle}>We Are Powerful</Text>
                  <Text style={styles.songAuthor}>Lenka - The Bright Slide</Text>
                </View>
                <Icon style={styles.optionIcon} name="md-more" size={25} color="#999"></Icon>
              </View>
            </View>
          </View>
        </ParallaxScrollView>
      </View>
    )
  }
}

export default LocalSongList;
