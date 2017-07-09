import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import ContentReducer from './ContentReducer';

const rootReducer = combineReducers({
  content: ContentReducer,
  routing: routerReducer
});

export default rootReducer;
