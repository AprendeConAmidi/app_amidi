import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import ContentReducer from './ContentReducer';
import UserReducer from './UserReducer';
import TurnOnOffMusicReducer from './TurnOnOffMusicReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  content: ContentReducer,
  isTurnOnMusic: TurnOnOffMusicReducer,
  routing: routerReducer
});

export default rootReducer;
