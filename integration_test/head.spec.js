import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers';
import initialState from '../src/reducers/initialState';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import HeadConnect from "../src/components/common/head/Head";

it('change isTurnOnMusic thought of the store',async () =>{
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  let wrapper = mount(<Provider store={store}><HeadConnect/></Provider>);

  let audioToogler = wrapper.find(".audio-toggler");
  audioToogler.simulate('click');

  let isTurnOnMusic = wrapper.find('Head').props().isTurnOnMusic;
  expect(isTurnOnMusic).toEqual(false);
});
