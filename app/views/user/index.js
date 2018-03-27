import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import { styles } from './index.style'

export default class User extends Component {
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
