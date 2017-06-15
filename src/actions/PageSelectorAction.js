import {ServerApiStub as ServerApi} from '../api/StubApi/ServerApiStub';
import * as type from './actionTypes';

export function loadAllQuestions() {
  return function (dispatch) {
    return ServerApi.loadAllQuestions().then(questions => {
      dispatch({
          type: type.LOAD_ALL_QUESTIONS,
          questions: questions
        }
      );
    }).catch(error => {
      throw (error);
    });
  };
}
