import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers';
import initialState from '../src/reducers/initialState';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {mount} from 'enzyme'
import {serverQuestionStub}  from "../src/api/StubApi/ServerApiStub";
import * as PageSelectorAction from '../src/actions/PageSelectorAction';
import PageSelector from "../src/components/pageSelector/PageSelector"

it('connect questions with PageSelector component through of the store and action',async () =>{
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  const action = PageSelectorAction.loadAllQuestions();
  await store.dispatch(action);

  let wrapper = mount(<Provider store={store}><PageSelector/></Provider>);

  let allQuestions = wrapper.find('PageSelector').props().questions;
  expect(allQuestions).toEqual(serverQuestionStub.questions);
});
