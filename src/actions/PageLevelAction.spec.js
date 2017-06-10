import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import thunk from 'redux-thunk';
import * as UtilStub from "../api/StubApi/UtilStubApi";
import {ServerApiStub} from "../api/StubApi/ServerApiStub";
import * as PageLevelAction from '../actions/PageLevelAction';


describe("PageLevelActionShould", () => {
  beforeEach(function () {
    ServerApiStub.zeroDelay();
  });

  it('filter question for category',async () =>{
    let category = "Pastoreo y Cereal 2";

    const action = PageLevelAction.loadQuestionsFor(category);
    let state = await executeAction(action);

    const actualQuestion = state.questions[0];
    expect(actualQuestion.category).toEqual(UtilStub.getCuestionFor(category).category);
  });

  it("return only 10 questions", async () =>{
    let category = "Pastoreo y Cereal 2";

    const action = PageLevelAction.loadQuestionsFor(category);
    let state = await executeAction(action);

    const actualQuestions = state.questions;
    expect(actualQuestions.length).toBe(10);
  });
});

async function executeAction(action){
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  await store.dispatch(action);
  return store.getState();
}
