import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers';
import initialState from '../src/reducers/initialState';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {mount} from 'enzyme'
import {serverContentStub}  from "../src/api/StubApi/ServerApiStub";
import * as LoadContentAction from '../src/actions/LoadContentAction';
import PageSelector from "../src/components/pageSelector/PageSelector"

it('connect questions with PageSelector component through of the store and action',async () =>{
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  const action = LoadContentAction.LoadContentAction();
  await store.dispatch(action);

  let wrapper = mount(<Provider store={store}><PageSelector/></Provider>);

  let allQuestions = wrapper.find('PageSelector').props().content;
  expect(allQuestions).toEqual(serverContentStub);
});
