import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';

import PropTypes from 'prop-types';

import Swiper from 'react-native-swiper';

import {styles} from './index.style';

export default class AdSwiper extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        items: PropTypes.array, // 所有swiper集合
    }

    renderSliderItem(item, i) {
        return (
            <View key={i} style={styles.slide1}>
                <ImageBackground style={styles.adImg} source={{uri: item.image_url}}>
                    <Text style={styles.text}>{item.title}</Text>
                </ImageBackground>
            </View>
        );
    }

    render() {
        return (
            <Swiper height={180}
                    dot={<View style={styles.dot}/>}
                    activeDot={<View style={styles.activeDot}/>}
                    paginationStyle={styles.paginationStyle}
                    autoplay
                    loop>
                {this.props.items.map((item, i) => this.renderSliderItem(item, i))}
            </Swiper>
        );
    }
}
