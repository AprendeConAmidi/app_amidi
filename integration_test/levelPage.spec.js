import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {mount} from 'enzyme'
import * as UtilStub from "../src/api/StubApi/UtilStubApi";
import LevelPage from "../src/components/levelPage/LevelPage";


describe("<LevelPage/> test integration", () => {
  xit('connect questions in LevelPage component through of the store',async () =>{
    const category = "Pastoreo y Cereal 2";
    let questionsStub = {
      questions: UtilStub.getQuestionsFor(category)
    };
    const store = createStore(rootReducer, questionsStub, applyMiddleware(thunk));

    let props = {level: category};
    let wrapper = mount(<Provider store={store}><LevelPage {...props}/></Provider>);
    /*
    not work for connect create factory for components
    let questionLevel = wrapper.find('LevelPage').props().questions[0];
    expect(UtilStub.isStubContainQuestion(questionLevel)).toBeTruthy();
    */
  });
});

