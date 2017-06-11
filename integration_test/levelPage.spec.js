import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers';
import initialState from '../src/reducers/initialState';
import thunk from 'redux-thunk';
import * as UtilStub from "../src/api/StubApi/UtilStubApi";
import * as PageLevelAction from '../src/actions/LevelPageAction';


describe("<LevelPage test integration", () => {
  it('connect store test integration with questions for category in PageLevelReducer',async () =>{
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    const action = PageLevelAction.loadQuestionsForLevelPage("Pastoreo y Cereal 2");
    await store.dispatch(action);

    const actual = store.getState().questions[0];
    expect(UtilStub.isStubContainQuestion(actual)).toBeTruthy();
    expect(actual).not.toBeUndefined();
  });
});

