import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import ContentReducer from './ContentReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  content: ContentReducer,
  routing: routerReducer
});

export default rootReducer;
