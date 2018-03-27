import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    BackHandler,
    ToastAndroid,
    Alert,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import {styles} from './index.style';

export default class Menu extends Component {

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackHandler);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackHandler);
    }

    onBackHandler = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }

    render() {
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
                            <ImageBackground
                                style={styles.hdBg}
                                source={require('../../assets/images/dd.jpg')}>
                                <View style={styles.avatar}>
                                    <Image
                                        style={styles.avatarImg}
                                        source={require('../../assets/images/korea.png')}></Image>
                                </View>
                                <View style={styles.hdBottom}>
                                    <View style={{
                                        flexDirection: 'row'
                                    }}>
                                        <Text style={styles.nickname}>默默哒谬</Text>
                                        <Text style={styles.rank}>Lv.8</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    )}>
                    <View>
                        <TouchableOpacity
                            style={styles.menuItem}
                            onPress={() => Actions.favorite({userId: 2})}>
                            <Icon
                                style={styles.menuIcon}
                                name="ios-cloud-done-outline"
                                size={20}
                                color="#4B3E4D"></Icon>
                            <Text style={styles.menuTitle}>我的音乐云</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.menuItem}
                            onPress={() => Alert.alert('版本号', alertMessage)}>
                            <Icon style={styles.menuIcon} name="ios-link-outline" size={20} color="#4B3E4D"></Icon>
                            <Text style={styles.menuTitle}>关于YunMusic</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => Actions.login()}>
                            <Icon
                                style={styles.menuIcon}
                                name="ios-contact-outline"
                                size={20}
                                color="#4B3E4D"></Icon>
                            <Text style={styles.menuTitle}>账号管理</Text>
                        </TouchableOpacity>
                    </View>
                </ParallaxScrollView>
            </View>
        )
    }
}
