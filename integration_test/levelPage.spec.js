import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers';
import initialState from '../src/reducers/initialState';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {mount} from 'enzyme'
import * as UtilStub from "../src/api/StubApi/UtilStubApi";
import * as LevelPageAction from '../src/actions/LevelPageAction';
import LevelPage from "../src/components/levelPage/LevelPage";


describe("<PageSelector test integration", () => {
  it('connect store test integration with questions for category in QuestionReducer',async () =>{
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    const action = LevelPageAction.loadQuestionsForLevelPage("Pastoreo y Cereal 2");
    await store.dispatch(action);

    const actual = store.getState().questions[0];
    expect(UtilStub.isStubContainQuestion(actual)).toBeTruthy();
    expect(actual).not.toBeUndefined();
  });

  it('connect questions in PageSelector component through of the store',async () =>{
    let questionsStub = {
      questions: UtilStub.getQuestionsFor("Pastoreo y Cereal 2")
    };
    const store = createStore(rootReducer, questionsStub, applyMiddleware(thunk));

    let wrapper = mount(<Provider store={store}><LevelPage/></Provider>);

    let questionLevel = wrapper.find('LevelPage').props().questions[0];
    expect(UtilStub.isStubContainQuestion(questionLevel)).toBeTruthy();
  });
});

