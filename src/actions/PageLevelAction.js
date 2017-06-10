import {ServerApiStub as ServerApi} from '../../src/api/ServerApiStub';
import * as type from './actionTypes';

   export function loadQuestionsFor(category) {
     return function (dispatch) {
       return ServerApi.loadAllQuestions().then(questions => {
          questions = questions.filter((question) => question.category === category);

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




