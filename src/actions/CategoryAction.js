import * as type from './actionTypes';
import UtilLocalStorage from '../utils/UtilLocalStorage';

const data = new UtilLocalStorage();

export function saveCategoryAction(user) {
  data.saveUser(user);
  return function (dispatch) {
    dispatch({
        type: type.UPDATE_USER,
        user: user,
      }
    );
  };
}


