import {ServerApiStub as ServerApi} from '../api/StubApi/ServerApiStub';
import * as type from './actionTypes';

export function LoadContentAction() {
  return function (dispatch) {
    return ServerApi.loadContent().then(content => {
      dispatch({
          type: type.LOAD_ALL_CONTENT,
          content: content,
        }
      );
    }).catch(error => {
      throw (error);
    });
  };
}
