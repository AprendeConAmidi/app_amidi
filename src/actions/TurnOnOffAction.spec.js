import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import thunk from 'redux-thunk';
import * as TurnOnOffMusicAction from './TurnOnOffMusicAction';


describe("TurnOnOffMusicAction", () =>{
  it('update music on or off through of turnOnOffMusicAction',async () =>{
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    const action = TurnOnOffMusicAction.turnOffOnMusicAction(false);
    await store.dispatch(action);

    expect(store.getState().isTurnOnMusic).toEqual(false);
  });
});
