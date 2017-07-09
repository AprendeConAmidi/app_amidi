import initialState from './initialState';
import * as type from '../actions/actionTypes';

export default function ContentReducer(state = initialState.user, action){
  switch (action.type){
    case type.UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}
