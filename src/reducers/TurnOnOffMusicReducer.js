import initialState from './initialState';
import * as type from '../actions/actionTypes';

export default function TurnOnOffMusic(state = initialState.isTurnOnMusic, action){
  switch (action.type){
    case type.UPDATE_MUSIC_BACKGROUND:
      return action.isTurnOnMusic;
    default:
      return state;
  }
}
