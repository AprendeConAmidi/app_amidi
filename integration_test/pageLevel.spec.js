import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers';
import initialState from '../src/reducers/initialState';
import thunk from 'redux-thunk';
import * as UtilStub from "../src/api/StubApi/UtilStubApi";
import * as PageLevelAction from '../src/actions/PageLevelAction';


describe("<PageLevel test integration", () => {
  it('connect store test integration with questions for category in PageLevelReducer',async () =>{
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    const action = PageLevelAction.loadQuestionsFor("Pastoreo y Cereal 2");
    await store.dispatch(action);

    const actual = store.getState().questions[0];
    expect(UtilStub.assertStubContainQuestion(actual)).toBeTruthy();
    expect(actual).not.toBeUndefined();
  });
});

