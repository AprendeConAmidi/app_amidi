import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import thunk from 'redux-thunk';
import * as UtilStub from "../api/StubApi/UtilStubApi";
import {ServerApiStub} from "../api/StubApi/ServerApiStub";
import {serverQuestionStub} from "../api/StubApi/ServerApiStub";
import * as PageLevelAction from './LevelPageAction';


describe("LevelPageActionShould", () => {
  beforeEach(function () {
    ServerApiStub.zeroDelay();
  });

  it('filter question for category',async () =>{
    let category = "Pastoreo y Cereal 2";

    const action = PageLevelAction.loadQuestionsForLevelPage(category);
    let state = await executeAction(action);

    const actualQuestion = state.questions[0];
    expect(actualQuestion.category).toEqual(UtilStub.getQuestionFor(category).category);
  });

  it("return only 10 questions", async () =>{
    let category = "Pastoreo y Cereal 2";

    const action = PageLevelAction.loadQuestionsForLevelPage(category);
    let state = await executeAction(action);

    const actualQuestions = state.questions;
    expect(actualQuestions.length).toBe(10);
  });

  it("return random questions", async () =>{
    let category = "Pastoreo y Cereal 2";

    const action = PageLevelAction.loadQuestionsForLevelPage(category);
    let state = await executeAction(action);

    let isOrder = isOrderQuestions(state.questions);

    expect(isOrder).not.toBeTruthy()

  });
});

async function executeAction(action){
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  await store.dispatch(action);
  return store.getState();
}

function isOrderQuestions(questions) {
  let serverStubQuestion = serverQuestionStub.questions;

  let position;
  for(let index in serverStubQuestion) {
    if (serverStubQuestion[index]._id === questions[0]._id) {
      position = index;
    }
  }
  let isOrder;
  for(let index in questions){
      isOrder = serverStubQuestion[parseInt(position) + parseInt(index)]._id === questions[index]._id;
    if(!isOrder){
      return isOrder;
    }
  }
  return true;
}
