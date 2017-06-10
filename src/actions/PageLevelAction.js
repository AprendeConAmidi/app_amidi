import {ServerApiStub as ServerApi} from '../api/StubApi/ServerApiStub';
import * as type from './actionTypes';

   export function loadQuestionsForPageLevel(category) {
     return function (dispatch) {
       return ServerApi.loadAllQuestions().then(questions => {
         const NUM_MAX_QUESTION = 10;
         questions = questions.filter((question) => question.category === category);
         questions = sortRandomArray(questions).slice(0,NUM_MAX_QUESTION);

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

function sortRandomArray(questions){
  let numberLoop = 50;
     for(let i =0; i < numberLoop; i++){
       questions = sortRandom(questions);
     }
  return questions;
}


function sortRandom(questions){
  let max = questions.length - 1;
  let min = 0;

  let firstPosition = parseInt(Math.floor(Math.random() * (max - min) + min));
  let secondPosition = parseInt(Math.floor(Math.random() * (max - min) + min));

  let tempQuestion = questions[firstPosition];
  questions[firstPosition] = questions[secondPosition];
  questions[secondPosition] = tempQuestion;

  return questions;
}

