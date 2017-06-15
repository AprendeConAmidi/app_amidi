import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import FormReducer from './FormReducer';
import QuestionReducer from './QuestionReducer';

const rootReducer = combineReducers({
  questions: QuestionReducer,
   emails: FormReducer,
  routing: routerReducer
});

export default rootReducer;
