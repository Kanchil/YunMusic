import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

import {styles} from './index.style';

export default class Category extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <TouchableHighlight style={styles.radius} activeOpacity={0.2} underlayColor="#4B3E4D"
                                        onPress={() => Actions.songList({cid: 1, listType: 'position'})}>
                        <Icon name="md-musical-note" size={36} color="#4B3E4D"></Icon>
                    </TouchableHighlight>
                    <Text style={styles.itemText}>独家发布</Text>
                </View>
                <View style={styles.item}>
                    <TouchableHighlight style={styles.radius} activeOpacity={0.2} underlayColor="#4B3E4D"
                                        onPress={() => Actions.songList({cid: 1, listType: 'position'})}>
                        <Icon name="md-star-half" size={36} color="#4B3E4D"></Icon>
                    </TouchableHighlight>
                    <Text style={styles.itemText}>最推荐</Text>
                </View>
                <View style={styles.item}>
                    <TouchableHighlight style={styles.radius} activeOpacity={0.2} underlayColor="#4B3E4D"
                                        onPress={() => Actions.songList({cid: 1, listType: 'position'})}>
                        <Icon name="md-podium" size={36} color="#4B3E4D"></Icon>
                    </TouchableHighlight>
                    <Text style={styles.itemText}>排行榜</Text>
                </View>
            </View>
        );
    }
}
