import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Util from '../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
class Category extends Component{
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableHighlight  style={styles.radius} activeOpacity={0.2} underlayColor="#4B3E4D" onPress={()=>Actions.songList({pos:3})}>
            <Icon name="md-musical-note" size={36} color="#4B3E4D"></Icon>
          </TouchableHighlight>
          <Text style={styles.itemText}>独家发布</Text>
        </View>
        <View style={styles.item}>
          <TouchableHighlight style={styles.radius} activeOpacity={0.2} underlayColor="#4B3E4D" onPress={()=>Actions.songList({pos:1})}>
            <Icon name="md-star-half" size={36} color="#4B3E4D"></Icon>
          </TouchableHighlight>
          <Text style={styles.itemText}>最推荐</Text>
        </View>
        <View style={styles.item}>
          <TouchableHighlight style={styles.radius} activeOpacity={0.2} underlayColor="#4B3E4D" onPress={()=>Actions.songList({pos:2})}>
            <Icon name="md-podium" size={36} color="#4B3E4D"></Icon>
          </TouchableHighlight>
          <Text style={styles.itemText}>排行榜</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:Util.screen.width,
    borderBottomWidth:Util.pixel,
    borderColor:'#ddd',
    height:120,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  item:{
    height:90,
    width:Util.screen.width / 3,
    alignItems:'center',
    justifyContent:'center',
  },
  itemText:{
    width:60,
    height:20,
    marginTop:5,
    fontSize:12,
    color:'#333',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  radius:{
    width:60,
    height:60,
    borderRadius:60,
    borderColor:'#4B3E4D',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:Util.pixel * 4
  }
})

export default Category;
