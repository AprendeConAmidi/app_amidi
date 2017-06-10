import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers';
import initialState from '../src/reducers/initialState';
import thunk from 'redux-thunk';
import {serverQuestionStub} from "../src/api/ServerApiStub";
import * as PageLevelAction from '../src/actions/PageLevelAction';

describe("<PageLevel test integration", () => {
  it('connect store test integration with questions for category in PageLevelReducer',async () =>{
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    const action = PageLevelAction.loadQuestionsFor("Pastoreo y Cereal 2");
    await store.dispatch(action);

    const actual = store.getState().questions[0];
    expect(assertStubContainQuestion(actual)).toBeTruthy();
    expect(actual).not.toBeUndefined();
  });
});

function assertStubContainQuestion(question){
  let isContain;
  for(let index in serverQuestionStub.questions){
    isContain = question === serverQuestionStub.questions[index];
        if(isContain){return isContain;}
  }
}
