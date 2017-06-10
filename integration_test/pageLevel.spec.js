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
    let category = "Pastoreo y Cereal 2";
    const action = PageLevelAction.loadQuestionsFor(category);
    let firstQuestion = serverQuestionStub.questions.filter((question) => question.category === category)[0];
    await store.dispatch(action);

    const actual = store.getState().questions[0];
    expect(actual).toEqual(firstQuestion);
    expect(actual.category).toEqual(category);
    expect(actual).not.toBeUndefined();
  });
});
