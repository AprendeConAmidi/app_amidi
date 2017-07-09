import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import thunk from 'redux-thunk';
import * as CategoryAction from './CategoryAction';


describe("CategoryAction", () =>{
  it('update user through of categoryAction',async () =>{
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    let userStub = {categoriesComplete:[{name: "Pastoreo y Cereal 1", level:'1'}]};
    const action = CategoryAction.saveCategoryAction(userStub);

    await store.dispatch(action);

    let user = store.getState().user;
    expect(user.categoriesComplete[0]).toEqual(user.categoriesComplete[0]);
  });
});
