import initialState from './initialState';
import * as type from '../actions/actionTypes';

export default function ContentReducer(state = initialState.content, action){
  switch (action.type){
    case type.LOAD_ALL_CONTENT:
      return action.content;
    default:
      return state;
  }
}
