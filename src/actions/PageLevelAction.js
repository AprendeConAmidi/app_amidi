import {ServerApiStub as ServerApi} from '../api/StubApi/ServerApiStub';
import * as type from './actionTypes';

   export function loadQuestionsFor(category) {
     return function (dispatch) {
       return ServerApi.loadAllQuestions().then(questions => {
         const NUM_MAX_QUESTION = 10;
         questions = questions.filter((question) => question.category === category).slice(0,NUM_MAX_QUESTION);

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




