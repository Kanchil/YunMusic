import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';
import Util from '../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
class Menu extends Component{
  render(){
    return (
      <View style={styles.container}>
      <ParallaxScrollView
        style={styles.parallax}
        backgroundColor="#f5f5f5"
        contentBackgroundColor="#fff"
        parallaxHeaderHeight={160}
        showsVerticalScrollIndicator={false}
        renderForeground={() => (
         <View style={styles.header}>
            <Image style={styles.hdBg} source={require('../images/dd.jpg')}>
              <View style={styles.avatar}>
                <Image style={styles.avatarImg} source={require('../images/korea.png')}></Image>
              </View>
              <View style={styles.hdBottom}>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.nickname}>默默哒谬</Text>
                  <Text style={styles.rank}>Lv.8</Text>
                </View>
              </View>
            </Image>
          </View>
        )}>
        <View>
          <View style={styles.menuItem}>
            <Icon style={styles.menuIcon} name="ios-mail-outline" size={20} color="#4B3E4D"></Icon>
            <Text style={styles.menuTitle}>我的消息</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon style={styles.menuIcon} name="ios-ribbon-outline" size={20} color="#4B3E4D"></Icon>
            <Text style={styles.menuTitle}>会员中心</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon style={styles.menuIcon} name="ios-cloud-done-outline" size={20} color="#4B3E4D"></Icon>
            <Text style={styles.menuTitle}>我的音乐云</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon style={styles.menuIcon} name="ios-link-outline" size={20} color="#4B3E4D"></Icon>
            <Text style={styles.menuTitle}>关于YunMusic</Text>
          </View>
        </View>
      </ParallaxScrollView>
      <View style={styles.bottom}>
        <Text style={[styles.bottomItem,styles.borderRight]}>设置</Text>
        <Text style={styles.bottomItem}>退出应用</Text>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:200,
    backgroundColor:'#f0f0f0'
  },
  parallax:{
    width:200,
    backgroundColor:'#f0f0f0'
  },
  header:{
    height: 160,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:Util.pixel,
    borderColor:'#ddd'
  },
  menuItem:{
    height:50,
    flexDirection:'row',
    alignItems:'center'
  },
  menuIcon:{
    marginLeft:10,
    marginRight:10,
  },
  menuTitle:{
    fontSize:14,
    color:'#333'
  },
  bottom:{
    bottom:0,
    left:0,
    width:200,
    height:50,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
    borderTopWidth:Util.pixel,
    borderColor:'#ddd'
  },
  bottomItem:{
    width:100,
    height:20,
    alignItems:'center',
    textAlign:'center',
  },
  borderRight:{
    borderRightWidth:Util.pixel * 2,
    borderColor:'#ddd'
  },
  hdBg:{
    width:200,
    height:160,
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
  }
})

export default Menu;
