import * as type from './actionTypes';
import initialState from '../reducers/initialState';
import UtilLocalStorage from '../utils/UtilLocalStorage';

const data = new UtilLocalStorage();

export function saveUserAction(user) {
  data.saveUser(user);
  return getActionUpdateUser(user);
}

export function removeUserAction() {
  data.removeUser();
  return getActionUpdateUser(initialState.user);
}

export function loadUserAction() {
  return function (dispatch) {
    return data.loadUser().then(user => {
      dispatch({
          type: type.UPDATE_USER,
          user: user
        }
      );
    });
  };
}

function getActionUpdateUser(user) {
  return function (dispatch) {
    dispatch({
        type: type.UPDATE_USER,
        user: user
      }
    );
  };
}

