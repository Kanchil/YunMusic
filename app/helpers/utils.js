import { AsyncStorage } from 'react-native';

export async function getSongsFromStorage() {
  let songs = await AsyncStorage.getItem('songs');
  songs = songs || JSON.stringify([]);
  return JSON.parse(songs);
}

export function findSongIncollection(id,songs){
  return songs.filter(song => song.id == id).length;
}

export function isAudioObject(contentType) {
  return contentType == "audio/mpeg";
}

export function formattedTime( timeInSeconds ){
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds - minutes * 60;

  if( isNaN(minutes) || isNaN(seconds) || minutes < 0 && seconds < 0){
    return "";
  } else {
    return(`${ withLeadingZero( minutes ) }:${ withLeadingZero( seconds.toFixed(0) ) }`);
  }
}

function withLeadingZero(amount){
  if (amount < 10 ){
    return `0${ amount }`;
  } else {
    return `${ amount }`;
  }
}
