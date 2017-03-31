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
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../utils/util';
import {Actions} from 'react-native-router-flux';
class User extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.user}>
          <TouchableHighlight activeOpacity={0.5} underlayColor="#f5f5f5" onPress={()=>Actions.localSongList()}>
            <View style={styles.userItem}>
              <Icon style={styles.iconStyle} name="md-phone-portrait" size={25} color="#4B3E4D"></Icon>
              <View style={styles.userText}>
                <Text style={styles.textStyle}>本地音乐</Text>
                <Text style={styles.numStyle}></Text>
              </View>
            </View>
          </TouchableHighlight>
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
