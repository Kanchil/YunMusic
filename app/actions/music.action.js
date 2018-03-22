import {
    AsyncStorage
} from 'react-native';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'react-native-fetch-blob';
import * as types from './types';
import Config from '../config/';
import * as Utils from '../helpers/utils';

export function downloadMusic(song) {
    return async (dispath) => {
        song.listen_url = Config.API_URL + song.listen_url;
        song.cover_url = Config.API_URL + song.cover_url;
        song.downloading = false;
        let songs = await Utils.getSongsFromStorage();
        if (Utils.findSongIncollection(song.id, songs)) {
            return {};
        }
        let dirs = RNFetchBlob.fs.dirs;
        const songRes = await RNFetchBlob
            .config({
                path: `${dirs.DocumentDir}/${song.id}.mp3`
            })
            .fetch('GET', song.listen_url, {})
            .progress((received, total) => {
                dispath(setProgress(received / total), song.id);
            });
        const headers = songRes.respInfo.headers;
        if (!Utils.isAudioObject(headers['Content-Type'])) {
            return;
        }
        const imgRes = await RNFetchBlob.config({
            path: `${dirs.DocumentDir}/${song.id}.jpg`
        })
            .fetch('GET', song.cover_url, {});
        song.downloading = false;
        let newSong = {...song};
        newSong.listen_url = songRes.path();
        newSong.cover_url = imgRes.path();
        songs = JSON.stringify([...songs, newSong]);
        await AsyncStorage.setItem('songs', songs);
        return dispath(setSongs(JSON.parse(songs)));
    }
}

export function musicDownloaded(path) {
    return {
        type: types.DOWNLOADED,
        path
    }
}

export function getSongs() {
    return async (dispath) => {
        let songs = await Utils.getSongsFromStorage();
        console.log(songs);
        return dispath(setSongs(songs));
    }
}

export function deleteSong(index, song) {
    return async (dispath) => {
        let songs = await Utils.getSongsFromStorage();
        try {
            await RNFS.unlink(song.listen_url);
            await RNFS.unlink(song.cover_url);
            songs.splice(index, 1);
            await AsyncStorage.setItem('songs', JSON.stringify(songs));
            return dispath(setSongs(songs));
        } catch (err) {
            //如果没有发现歌曲
            songs.splice(index, 1);
            await AsyncStorage.setItem('songs', JSON.stringify(songs));
            return dispath(setSongs(songs));
        }
    }
}

export function setSongs(songs) {
    return {
        type: types.SONGS,
        songs
    }
}

export function setProgress(progress, id) {
    return {
        type: types.PROGRESS,
        progress,
        id
    }
}