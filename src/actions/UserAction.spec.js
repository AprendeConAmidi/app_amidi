import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import thunk from 'redux-thunk';
import * as UserAction from './UserAction';


describe("UserAction", () =>{
  const userStub = {categoriesComplete:[{name: "Pastoreo y Cereal 1", level:'1'}]};

  beforeEach(function () {
    localStorage.clear();
  });

  it('update user through of categoryAction',async () =>{
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    const action = UserAction.saveUserAction(userStub);
    await store.dispatch(action);

    let user = store.getState().user;
    expect(userStub.categoriesComplete[0]).toEqual(user.categoriesComplete[0]);
  });

  it('save user in localStorage',async () =>{
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    const action = UserAction.saveUserAction(userStub);
    await store.dispatch(action);

    expect(userStub.categoriesComplete[0]).toEqual(JSON.parse(localStorage.getItem("USER")).categoriesComplete[0]);
  });

  it('when there aren´t user in localStorage return {}',async () =>{
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

    const action = UserAction.loadUserAction();
    await store.dispatch(action);
    let userLoad = store.getState().user;

    expect({}).toEqual(userLoad);
  });

  it('remove user in localStorage',async () =>{
    localStorage.setItem("USER", userStub);
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

    const action = UserAction.removeUserAction();
    await store.dispatch(action);
    let userRemove = store.getState().user;

    expect(initialState.user).toEqual(userRemove);
  });
});
