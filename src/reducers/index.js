import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import QuestionReducer from './QuestionReducer';

const rootReducer = combineReducers({
  questions: QuestionReducer,
  routing: routerReducer
});

export default rootReducer;
