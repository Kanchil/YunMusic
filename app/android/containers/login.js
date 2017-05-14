import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
  View,
  AsyncStorage
} from 'react-native';
import {Actions,Modal, Schema} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../utils/util';
import Config from '../config/';
import NetUtil from '../net/';
class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      'nickname':'',
      'password':''
    };
    this.login = this.login.bind(this);
  }
  login(){
    let formData = new FormData();
    formData.append("username",this.state.nickname);
    formData.append("password",this.state.password);
    let url = Config.API_URL + "api.php?s=/index/login";
    NetUtil.postJson(url,formData,(responseText) => {
          console.log(responseText);
          if (responseText.status) { //登陆成功
            $userInfo = responseText.data;
            //存储用户信息到本地
            AsyncStorage.setItem('userInfo',JSON.stringify($userInfo),(err,res)=>{
              if (err) {
                Alert.alert("发生未知错误！请重新登陆！");
                return false;
              }
            });
            Alert.alert(responseText.message);
            Actions.pop();
            Actions.home();
          }else{
            Alert.alert(responseText.message)
          }

    })
  }


  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={ styles.headerClose } onPress={ Actions.pop }>
            <Icon color="#fff" name="ios-arrow-back-outline" size={36}></Icon>
          </TouchableOpacity>
          <Text style={styles.headtitle}>账号管理</Text>
        </View>
        <View style={styles.marginTopview}/>
        <View style={styles.inputview}>
        <TextInput underlineColorAndroid='transparent'
          value={this.state.nickname}
          style={styles.textinput}
          onChangeText={(text) => this.setState({'nickname':text})}
          placeholder='用户名'/>
        <View style={styles.dividerview}>
        <Text style={styles.divider}></Text>
        </View>
        <TextInput underlineColorAndroid='transparent'
          value={this.state.password}
          secureTextEntry = {true}
          onChangeText={(text) => this.setState({'password':text})}
          style={styles.textinput}
          placeholder='密码'
        secureTextEntry={true}/>
        </View>
        <View style={styles.bottomview}>
        <View style={styles.buttonview}>
          <TouchableOpacity onPress={this.login}>
            <Text style={styles.logintext}>登 录</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottombtnsview}>
        <View style={styles.bottomleftbtnview}>
        </View>
        <TouchableOpacity style={styles.bottomrightbtnview} onPress={()=>Actions.register()}>
          <Text style={styles.bottombtn}>注册新用户</Text>
        </TouchableOpacity>
        </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    height: 50,
    backgroundColor: '#4B3E4D',
    justifyContent: 'center',
    position:'relative'
  },
  headerClose:{
    position:'absolute',
    top:0,
    left:0,
    height:50,
    width:30,
    paddingLeft:10,
    alignItems:'center',
    justifyContent:'center'
  },
  headtitle: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#ffffff',
  },
  avatarview: {
    height: 150,
    backgroundColor: '#ECEDF1',
    justifyContent: 'center',
  },
  avatarimage: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  marginTopview: {
    height: 15,
    backgroundColor: '#F7F7F9'
  },
  inputview: {
    height: 100,
    marginLeft: 10,
    marginRight:10
  },
  textinput: {
    flex: 1,
    fontSize: 16,
  },
  dividerview: {
    flexDirection: 'row',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ECEDF1'
  },
  bottomview: {
    backgroundColor: '#ECEDF1',
    flex: 1,
  },
  buttonview: {
    backgroundColor: '#4B3E4D',
    margin: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logintext: {
  fontSize: 17,
  color: '#FFFFFF',
  marginTop: 10,
  marginBottom: 10,
  },
  emptyview: {
  flex: 1,
  },
  bottombtnsview: {
  flexDirection: 'row',
  },
  bottomleftbtnview: {
  flex: 1,
  height: 50,
  paddingLeft: 10,
  alignItems: 'flex-start',
  justifyContent: 'center',
  },
  bottomrightbtnview: {
  flex: 1,
  height: 50,
  paddingRight: 10,
  alignItems: 'flex-end',
  justifyContent: 'center',
  },
  bottombtn: {
  fontSize: 15,
  color: '#4B3E4D',
  }

})

export default Login;
