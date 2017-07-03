import initialState from './initialState';
import * as type from '../actions/actionTypes';

export default function QuestionReducer(state = initialState.questions, action){
  switch (action.type){
    case type.LOAD_ALL_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
}
