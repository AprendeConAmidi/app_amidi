import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import FormReducer from './FormReducer';
import PageLevelReducer from './PageLevelReducer';

const rootReducer = combineReducers({
  questions: PageLevelReducer,
   emails: FormReducer,
  routing: routerReducer
});

export default rootReducer;
