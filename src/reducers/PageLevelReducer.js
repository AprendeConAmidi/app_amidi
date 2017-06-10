import initialState from './initialState';
import * as type from '../actions/actionTypes';

export default function PageLevelReducer(state = initialState.questions, action){
  switch (action.type){
    case type.LOAD_ALL_QUESTIONS:
      return action.questions;
      break;
    default:
      return state;
  }
}
