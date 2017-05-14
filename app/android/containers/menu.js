import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  BackAndroid,
  ToastAndroid,
  Alert,
  View
} from 'react-native';
import Util from '../utils/util';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
class Menu extends Component{

  componentWillMount(){
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onBackAndroid = () => {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
          //最近2秒内按过back键，可以退出应用。
          return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      return true;
  }

  render(){
    //关于YunMusic
    var alertMessage = 'YunMusic 1.1.1_beta';

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
          <TouchableOpacity style={styles.menuItem} onPress={()=>Actions.message()}>
            <Icon style={styles.menuIcon} name="ios-mail-outline" size={20} color="#4B3E4D"></Icon>
            <Text style={styles.menuTitle}>我的消息</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={()=>Actions.favorite({userId:2})}>
            <Icon style={styles.menuIcon} name="ios-cloud-done-outline" size={20} color="#4B3E4D"></Icon>
              <Text style={styles.menuTitle}>我的音乐云</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => Alert.alert('版本号',alertMessage)}>
            <Icon style={styles.menuIcon} name="ios-link-outline" size={20} color="#4B3E4D"></Icon>
            <Text style={styles.menuTitle}>关于YunMusic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={()=>Actions.login()}>
            <Icon style={styles.menuIcon} name="ios-contact-outline" size={20} color="#4B3E4D"></Icon>
            <Text style={styles.menuTitle}>账号管理</Text>
          </TouchableOpacity>
        </View>
      </ParallaxScrollView>
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
    width:200,
    height:25,
    alignItems:'center',
    textAlign:'center',
    fontSize:16
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
