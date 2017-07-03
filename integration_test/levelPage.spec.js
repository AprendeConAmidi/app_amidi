import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {mount} from 'enzyme'
import * as UtilStub from "../src/api/StubApi/UtilStubApi";
import LevelPage from "../src/components/levelPage/LevelPage";


describe("<PageSelector test integration", () => {
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

