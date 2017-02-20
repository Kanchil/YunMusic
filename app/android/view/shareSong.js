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
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../utils/util';
class ShareSong extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image style={styles.avatar} source={require('../images/korea.png')}></Image>
          <View style={{marginLeft:5}}>
            <View style={styles.title}>
              <Text style={styles.user}>每日欧美潮歌推荐</Text>
              <Text style={{fontSize:12}}>分享单曲：</Text>
            </View>
            <Text style={styles.time}>昨天20:06</Text>
          </View>
        </View>
        <Text style={styles.content}>
          每日欧美潮歌推荐每日欧美潮歌推荐每日欧美潮歌推荐每日欧美潮歌推荐adaedqewqw每日欧美潮歌推荐每日欧美潮歌推荐13213131每日欧美潮歌推荐...
        </Text>
        <View style={styles.imgArea}>
          <View style={styles.thumb}>
            <Image style={styles.thumbImg} source={require('../images/korea.png')}></Image>
          </View>
          <View style={styles.thumb}>
            <Image style={styles.thumbImg} source={require('../images/korea.png')}></Image>
          </View>
          <View style={styles.thumb}>
            <Image style={styles.thumbImg} source={require('../images/korea.png')}></Image>
          </View>
          <View style={styles.thumb}>
            <Image style={styles.thumbImg} source={require('../images/korea.png')}></Image>
          </View>
        </View>
        <View style={styles.playArea}>
          <Image style={styles.playImg} source={require('../images/korea.png')}>
            <View style={styles.playBtn}>
              <Icon name="md-play" size={25} color="#fff"></Icon>
            </View>
          </Image>
        <View style={styles.playInfo}>
            <Text style={styles.singName}>繁花繁花繁花繁花</Text>
            <Text style={styles.singer}>董贞</Text>
          </View>
        </View>
        <View style={styles.commentArea}>
          <View style={styles.commentBtn}>
            <Icon name="ios-heart-outline" size={22} color="#4B3E4D"></Icon>
            <Text style={styles.commentNum}>2万</Text>
          </View>
          <View style={styles.commentBtn}>
            <Icon name="ios-text-outline" size={22} color="#4B3E4D"></Icon>
            <Text style={styles.commentNum}>1.1万</Text>
          </View>
          <View style={styles.commentBtn}>
            <Icon name="ios-redo-outline" size={22} color="#4B3E4D"></Icon>
            <Text style={styles.commentNum}>11万</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:Util.screen.width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop:15,
    paddingTop:10,
    paddingBottom:20,
    borderTopWidth:Util.pixel,
    borderBottomWidth:Util.pixel,
    borderColor:'#ddd',
  },
  top:{
    width:Util.screen.width,
    height:40,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  avatar:{
    marginLeft:10,
    height:40,
    width:40
  },
  title:{
    flexDirection:'row',
    alignItems:'center'
  },
  user:{
    fontSize:15,
    color:'#A5AAD9',
    marginRight:5,
  },
  time:{
    color:'#999',
    fontSize:8,
  },
  content:{
    paddingLeft:10,
    paddingRight:10,
    color:'#333',
    fontSize:14
  },
  imgArea:{
    width:Util.screen.width,
    paddingRight:10,
    paddingLeft:10,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  thumb:{
    width:(Util.screen.width - 20) / 3,
    height:(Util.screen.width - 20) / 3,
    alignItems:'center'
  },
  thumbImg:{
    width:(Util.screen.width - 30) / 3,
    height:(Util.screen.width - 30) / 3,
  },
  playArea:{
    width:Util.screen.width - 20,
    paddingLeft:5,
    paddingRight:5,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'#f5f5f5',
    flexDirection:'row',
    alignItems:'center'
  },
  playBtn:{
    width:50,
    height:50,
    backgroundColor:'rgba(75,62,77,0.4)',
    alignItems:'center',
    justifyContent:'center'
  },
  playImg:{
    width:50,
    height:50,
    marginRight:5
  },
  playInfo:{
    justifyContent:'space-around'
  },
  singName:{
    fontSize:14,
    color:'#333'
  },
  singer:{
    fontSize:10,
    color:'#999'
  },
  commentArea:{
    width:Util.screen.width - 20,
    flexDirection:'row',
    justifyContent:'flex-end',
    marginTop:15,
  },
  commentBtn:{
    marginLeft:20,
    flexDirection:'row',
    alignItems:'center'
  },
  commentNum:{
    fontSize:8,
    color:'#999',
    marginLeft:5,
  }
});

export default ShareSong;
