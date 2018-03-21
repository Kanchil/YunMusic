import React, { Component } from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions';

import { styles } from './index.style';

import IndexSong from '../../components/indexSong';

class Recommend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            listType: this.props.listType,
            cid: this.props.cid
        };
    }

    componentDidMount() {
        // TODO:: 请求数据
    }

    onPress(song) {
        console.log(song);
        this.props.downloadMusic(song);
    }

    getMore() {
        Actions.songList({ listType: this.state.listType, cid: this.state.cid });
    }

    songClick(song, index) {
        Actions.play({ 
            searchedSongs: this.state.songs, 
            songIndex:index, 
            onMusicDownload: this.onPress.bind(this) 
        });
    }

    renderSongs(song, index) {
        return (
            <IndexSong key={ index }
                songImage = { song.cover_url } 
                title = { song.name }
                onPress = { this.songClick.bind(this,song,index) }
                downloadMusic = { this.onPress.bind(this, song) }
                search = { true } />
        );
    }
    render() {
        return (
            <View style = { styles.container }>
                <View style = { styles.conTop }>
                    <Text style = { styles.conTitle }>{ this.props.title }</Text>
                    <TouchableOpacity onPress = { this.getMore.bind(this) }>
                        <Text style = { styles.conMore }>更多&gt;</Text>
                    </TouchableOpacity>
                </View>
                <View style = { styles.conContainer }>
                    { this.state.songs.map((song,index) => this.renderSongs(song, index)) }
                </View>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
    return {
        searchResult: store.searchResult,
        progress: store.progress
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);