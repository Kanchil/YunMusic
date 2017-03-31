import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import Util from '../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
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

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
    width:Util.screen.width,
    backgroundColor:'#f5f5f5'
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
  top:{
    width:Util.screen.width,
    height:50,
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:Util.pixel,
    borderColor:'#ddd'
  },
  headerCon:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  playAll:{
    fontSize:16,
    color:'#333',
  },
  songsNum:{
    fontSize:12,
    color:'#999',
    marginLeft:5,
  },
  songItem:{
    width:Util.screen.width,
    height:60,
    flexDirection:'row',
    alignItems:'center'
  },
  songRight:{
    flex:1,
    height:60,
    borderBottomWidth:Util.pixel,
    borderColor:'#ddd',
    flexDirection:'row',
    alignItems:'center'
  },
  songIcon:{
    width:40,
    alignItems:'center',
    textAlign:'center'
  },
  songOrder:{
    width:40,
    alignItems:'center',
    textAlign:'center',
    fontSize:14,
    color:'#999'
  },
  optionIcon:{
    width:40,
    alignItems:'center',
    textAlign:'center'
  },
  songInfo:{
    flex:1,
  },
  songTitle:{
    color:'#333',
    fontSize:14,
  },
  songAuthor:{
    color:'#999',
    fontSize:10
  }
})

export default LocalSongList;
