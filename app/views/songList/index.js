import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    InteractionManager,
    Image,
    ImageBackground
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../../actions';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Song from '../../components/song';

import {styles} from './index.style';
import {getSongs, getSongsByAlbum, getSongsByPosition} from '../../api/song';

class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            listType: props.listType,
            cid: props.cid,
            isLoading: true
        }
    }

    onPress(song) {
        console.log("onPress")
        this.props.downloadMusic(song);
    }

    songClick(song, index) {
        Actions.play({searchedSongs: this.state.songs, songIndex: index, onMusicDownload: this.onPress.bind(this)})
    }

    componentDidMount() {
        let cid = this.state.cid;
        const result = [];
        InteractionManager.runAfterInteractions(() => {
            if (this.state.listType === 'album') {
                getSongsByAlbum(cid).then(data => {
                    console.log(data)
                    this.setState({
                        songs: data,
                        isLoading: false
                    })
                })
            } else if (this.state.listType === 'position') {
                getSongsByPosition(cid).then(data => {
                    console.log(data)
                    this.setState({
                        songs: data,
                        isLoading: false
                    })
                })
            }
        })

    }

    renderLoading() {
        if (this.state.isLoading) {
            return <ActivityIndicator size="large" color='#4B3E4D' style={{marginTop: 5}}/>
        }
    }

    playAll() {
        if (this.state.isLoading) {
            return false
        }
        Actions.play({searchedSongs: this.state.songs, songIndex: 0, onMusicDownload: this.onPress.bind(this)})
    }

    render() {
        return (
            <View style={styles.container}>
                <ParallaxScrollView
                    style={styles.parallax}
                    backgroundColor="#f5f5f5"
                    contentBackgroundColor="#fff"
                    parallaxHeaderHeight={200}
                    showsVerticalScrollIndicator={false}
                    renderForeground={() => (
                        <View style={styles.header}>
                            <ImageBackground style={styles.hdBg} source={require('../../assets/images/dd.jpg')}>
                                <View style={styles.avatar}>
                                    <Image style={styles.avatarImg}
                                           source={require('../../assets/images/korea.png')}></Image>
                                </View>
                                <View style={styles.hdBottom}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={styles.nickname}>默默哒谬</Text>
                                        <Text style={styles.rank}>Lv.8</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    )}>
                    <View style={{backgroundColor: '#fff'}}>
                        <View style={styles.top}>
                            <Icon style={styles.optionIcon} name="md-play" size={26} color="#333"></Icon>
                            <TouchableOpacity onPress={this.playAll.bind(this)} style={styles.headerCon}>
                                <Text style={styles.playAll}>播放全部</Text>
                                <Text style={styles.songsNum}>共{this.state.songs.length}首</Text>
                            </TouchableOpacity>
                        </View>
                        {this.renderLoading()}
                        {this.state.songs.map((song, index) => {
                            return (
                                <Song
                                    key={index}
                                    orderNum={index + 1}
                                    onPress={this.songClick.bind(this, song, index)}
                                    songName={song.name}
                                    artistName={song.artist_name}
                                    songImage={song.cover_url}
                                    id={song.id}
                                    progreses={this.props.progreses}
                                    downloading={song.downloading}
                                    downloadMusic={this.onPress.bind(this, song)}
                                    search={true}
                                />
                            )
                        })}
                    </View>
                </ParallaxScrollView>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
    return {
        searchResults: store.searchResults,
        progreses: store.progreses
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SongList);
