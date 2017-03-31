import * as types from './types';

export function togglePlay(playing){
  return {
    type:types.PLAYING,
    playing
  }
}
