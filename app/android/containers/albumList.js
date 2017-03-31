import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
} from 'react-native';
import Util from '../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
class AlbumList extends Component{
  render(){
    return (
        <View style={styles.container}>
          <View style={styles.itemTop}><Text style={styles.topTitle}>全部歌单</Text></View>
          <View style={styles.itemList}>
            <View style={styles.item}>
              <TouchableHighlight  style={styles.radius} activeOpacity={0.4} underlayColor="#4B3E4D">
                <Image style={styles.itemThumb} source={require('../images/dd.jpg')}>
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
                <Image style={styles.itemThumb} source={require('../images/dd.jpg')}>
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
                <Image style={styles.itemThumb} source={require('../images/dd.jpg')}>
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

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:50,
    width:Util.screen.width,
    backgroundColor:'#f5f5f5'
  },
  itemList:{
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    flexWrap:'wrap',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10
  },
  itemTop:{
    height:40,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
    marginTop:10,
  },
  topTitle:{
    marginLeft:10,
    paddingLeft:10,
    borderLeftWidth:Util.pixel * 5,
    borderColor:'#4B3E4D',
    fontSize:16,
    color:'#333'
  },
  item:{
    width:(Util.screen.width - 30) / 2,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15,
  },
  itemThumb:{
    width:(Util.screen.width - 30) / 2,
    height:(Util.screen.width - 30) / 2,
    justifyContent:'space-between'
  },
  itemText:{
    width:(Util.screen.width - 30) / 2,
    height:40,
    marginTop:5,
    fontSize:12,
    color:'#333',
    textAlign:'justify',
    alignItems:'center',
    lineHeight:18,
    justifyContent:'center',
  },
  listen:{
    width:80,
    paddingTop:3,
    paddingBottom:3,
    backgroundColor:'rgba(10,10,10,0.4)',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  listenerNum:{
    fontSize:8,
    color:'#fff',
    marginRight:5,
    marginLeft:5,
  },
  author:{
    bottom:10,
    left:5,
    paddingRight:5,
    flexDirection:'row',
    alignItems:'center'
  },
  authorName:{
    fontSize:12,
    color:'#fff',
    marginLeft:5,
  }
})

export default AlbumList;
