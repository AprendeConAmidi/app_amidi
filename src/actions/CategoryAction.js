import * as type from './actionTypes';

export function saveCategoryAction(user) {
  return function (dispatch) {
    dispatch({
        type: type.UPDATE_USER,
        user: user,
      }
    );
  };
}

