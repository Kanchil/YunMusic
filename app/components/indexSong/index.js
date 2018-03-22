import React, {Component} from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import Config from '../../config';

export default class IndexSong extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.conItem}>
                <Image style={styles.conImg} source={{uri: Config.API_URL + this.props.songImage}}></Image>
                <Text style={styles.conSong}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}
