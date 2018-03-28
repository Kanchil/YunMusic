import React, {Component} from 'react';
import {
    Text,
    Alert,
    TouchableOpacity,
    TextInput,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

import {register} from '../../api/user';

import {styles} from './index.style';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'nickname': '',
            'password': ''
        };
        this.register = this.register.bind(this);
    }

    register() {
        let formData = new FormData()
        formData.append('username', this.state.nickname)
        formData.append('password', this.state.password)
        register(formData).then(() => {
            Alert.alert('注册成功')
            Actions.pop();
            Actions.login();
        }).catch(error => {
            Alert.alert(error.message)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerClose} onPress={Actions.pop}>
                        <Icon color="#fff" name="ios-arrow-back-outline" size={36}></Icon>
                    </TouchableOpacity>
                    <Text style={styles.headtitle}>账号注册</Text>
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
                    <TouchableOpacity style={styles.buttonview} onPress={this.register}>
                        <Text style={styles.logintext}>注 册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default Register;
