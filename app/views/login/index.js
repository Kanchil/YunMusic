import React, {Component} from 'react';
import {
    Text,
    Alert,
    TouchableOpacity,
    TextInput,
    View,
    AsyncStorage
} from 'react-native';
import {Actions, Modal, Schema} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import {login} from '../../api/user'

import {styles} from './index.style';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'nickname': '',
            'password': ''
        };
        this.login = this.login.bind(this);
    }

    login() {
        let formData = new FormData();
        formData.append("username", this.state.nickname);
        formData.append("password", this.state.password);
        login(formData).then(responseText => {
            console.log(responseText);
            if (responseText.status) { //登陆成功
                $userInfo = responseText.data;
                //存储用户信息到本地
                AsyncStorage.setItem('userInfo', JSON.stringify($userInfo), (err, res) => {
                    if (err) {
                        Alert.alert("发生未知错误！请重新登陆！");
                        return false;
                    }
                });
                Alert.alert(responseText.message);
                Actions.pop();
                Actions.home();
            } else {
                Alert.alert(responseText.message)
            }
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerClose} onPress={Actions.pop}>
                        <Icon color="#fff" name="ios-arrow-back-outline" size={36}></Icon>
                    </TouchableOpacity>
                    <Text style={styles.headtitle}>账号管理</Text>
                </View>
                <View style={styles.marginTopview}/>
                <View style={styles.inputview}>
                    <TextInput underlineColorAndroid='transparent'
                               value={this.state.nickname}
                               style={styles.textinput}
                               onChangeText={(text) => this.setState({'nickname': text})}
                               placeholder='用户名'/>
                    <View style={styles.dividerview}>
                        <Text style={styles.divider}></Text>
                    </View>
                    <TextInput underlineColorAndroid='transparent'
                               value={this.state.password}
                               secureTextEntry={true}
                               onChangeText={(text) => this.setState({'password': text})}
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
                        <TouchableOpacity style={styles.bottomrightbtnview} onPress={() => Actions.register()}>
                            <Text style={styles.bottombtn}>注册新用户</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
