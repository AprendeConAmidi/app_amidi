import * as type from './actionTypes';

export function turnOffOnMusicAction(isTurnOnMusic) {
  return function (dispatch) {
    dispatch({
        type: type.UPDATE_MUSIC_BACKGROUND,
        isTurnOnMusic: isTurnOnMusic,
      }
    );
  };
}
