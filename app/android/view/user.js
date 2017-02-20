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
  ScrollView,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../utils/util';
class User extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.user}>
          <View style={styles.userItem}>
            <Icon style={styles.iconStyle} name="md-phone-portrait" size={25} color="#4B3E4D"></Icon>
            <View style={styles.userText}>
              <Text style={styles.textStyle}>本地音乐</Text>
              <Text style={styles.numStyle}>(11)</Text>
            </View>
          </View>
          <View style={styles.userItem}>
            <Icon style={styles.iconStyle} name="md-time" size={25} color="#4B3E4D"></Icon>
            <View style={styles.userText}>
              <Text style={styles.textStyle}>最近播放</Text>
              <Text style={styles.numStyle}>(11)</Text>
            </View>
          </View>
          <View style={styles.userItem}>
            <Icon style={styles.iconStyle} name="md-download" size={25} color="#4B3E4D"></Icon>
            <View style={styles.userText}>
              <Text style={styles.textStyle}>下载管理</Text>
              <Text style={styles.numStyle}>(11)</Text>
            </View>
          </View>
          <View style={styles.userItem}>
            <Icon style={styles.iconStyle} name="md-contacts" size={25} color="#4B3E4D"></Icon>
            <View style={styles.userText}>
              <Text style={styles.textStyle}>我的歌手</Text>
              <Text style={styles.numStyle}>(11)</Text>
            </View>
          </View>
        </View>
        <View style={styles.userSong}>
          <View style={styles.songTop}><Text style={styles.songTopTitle}>创建的歌单</Text></View>
          <View style={styles.songItem}>
            <Image style={styles.songImg} source={require('../images/korea.png')}></Image>
            <View style={styles.song}>
              <View style={styles.songLeft}>
                <Text style={styles.songTitle}>我喜欢的音乐</Text>
                <Text style={styles.songNum}>233首</Text>
              </View>
              <Icon style={styles.iconStyle2} name="md-more" size={25} color="#4B3E4D"></Icon>
            </View>
          </View>
          <View style={styles.songItem}>
            <Image style={styles.songImg} source={require('../images/korea.png')}></Image>
            <View style={styles.song}>
              <View style={styles.songLeft}>
                <Text style={styles.songTitle}>哔哩哔哩</Text>
                <Text style={styles.songNum}>111首</Text>
              </View>
              <Icon style={styles.iconStyle2} name="md-more" size={25} color="#4B3E4D"></Icon>
            </View>
          </View>
        </View>
        <View style={styles.userSong}>
          <View style={styles.songTop}><Text style={styles.songTopTitle}>收藏的歌单</Text></View>
          <View style={styles.songItem}>
            <Image style={styles.songImg} source={require('../images/korea.png')}></Image>
            <View style={styles.song}>
              <View style={styles.songLeft}>
                <Text style={styles.songTitle}>中毒循环</Text>
                <Text style={styles.songNum}>233首</Text>
              </View>
              <Icon style={styles.iconStyle2} name="md-more" size={25} color="#4B3E4D"></Icon>
            </View>
          </View>
          <View style={styles.songItem}>
            <Image style={styles.songImg} source={require('../images/korea.png')}></Image>
            <View style={styles.song}>
              <View style={styles.songLeft}>
                <Text style={styles.songTitle}>2017优质华语</Text>
                <Text style={styles.songNum}>111首</Text>
              </View>
              <Icon style={styles.iconStyle2} name="md-more" size={25} color="#4B3E4D"></Icon>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
  },
  user:{
    width:Util.screen.width
  },
  userItem:{
    width:Util.screen.width,
    height:50,
    flexDirection:'row',
    alignItems:'center',
  },
  iconStyle:{
    marginLeft:10
  },
  userText:{
    flex:1,
    height:50,
    marginLeft:10,
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:Util.pixel,
    borderColor:'#ddd'
  },
  textStyle:{
    fontSize:15,
    color:'#333'
  },
  numStyle:{
    fontSize:12,
    color:'#999',
    marginLeft:5
  },
  userSong:{
    width:Util.screen.width
  },
  songTop:{
    width:Util.screen.width,
    backgroundColor:'#f5f5f5',
    height:30,
    justifyContent:'center'
  },
  songTopTitle:{
    fontSize:14,
    color:'#333',
    marginLeft:10
  },
  songItem:{
    width:Util.screen.width,
    height:70,
    flexDirection:'row',
    alignItems:'center',
  },
  songImg:{
    width:50,
    height:50,
    marginLeft:10
  },
  song:{
    marginLeft:10,
    flex:1,
    height:70,
    borderColor:'#ddd',
    flexDirection:'row',
    alignItems:'center',
    borderBottomWidth:Util.pixel
  },
  songLeft:{
    flex:1,
  },
  songTitle:{
    fontSize:14,
    color:'#333'
  },
  songNum:{
    fontSize:12,
    color:'#999'
  },
  iconStyle2:{
    marginRight:20
  }
});
export default User;
