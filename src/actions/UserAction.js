import * as type from './actionTypes';
import UtilLocalStorage from '../utils/UtilLocalStorage';

const data = new UtilLocalStorage();

export function saveUserAction(user) {
  data.saveUser(user);
  return function (dispatch) {
    dispatch({
        type: type.UPDATE_USER,
        user: user,
      }
    );
  };
}

export function loadUserAction() {
  return function (dispatch) {
    return data.loadUser().then(user => {
      dispatch({
          type: type.UPDATE_USER,
          user: user,
        }
      );
    });
  };
}

