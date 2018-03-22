import React, {Component} from 'react';
import {
    ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Song from '../../components/song';

import {styles} from './index.style';

export default class Downloads extends Component {
    onSongPlay(index) {
        Actions.play({songIndex: index, islocal: true})
    }

    deleteSong(index) {
        this.props.deleteSong(index, this.props.songs[index]);
    }

    render() {
        return (
            <ScrollView containerStyle={[styles.homeContainer, styles.noPaddingHorizontal]}>
                {
                    this.props.songs.map((song, index) => {
                        return <Song
                            key={index}
                            onPress={this.onSongPlay.bind(this, index)}
                            songName={song.name}
                            artistName={song.artist_name}
                            songImage={song.cover_url}
                            deleteSong={this.deleteSong.bind(this, index)}
                            search={false}
                        />
                    })
                }
            </ScrollView>
        );
    }
}
