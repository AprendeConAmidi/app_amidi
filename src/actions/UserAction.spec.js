import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import thunk from 'redux-thunk';
import * as UserAction from './UserAction';


describe("UserAction", () =>{
  it('update user through of categoryAction',async () =>{
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    let userStub = {categoriesComplete:[{name: "Pastoreo y Cereal 1", level:'1'}]};
    const action = UserAction.saveCategoryAction(userStub);
    await store.dispatch(action);

    let user = store.getState().user;
    expect(userStub.categoriesComplete[0]).toEqual(user.categoriesComplete[0]);
  });
  it('save user in localStorage',async () =>{
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    let userStub = {categoriesComplete:[{name: "Pastoreo y Cereal 1", level:'1'}]};
    const action = UserAction.saveCategoryAction(userStub);
    await store.dispatch(action);

    expect(userStub.categoriesComplete[0]).toEqual(JSON.parse(localStorage.getItem("USER")).categoriesComplete[0]);
  });
});
