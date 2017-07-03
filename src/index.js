import React from 'react';
import { render } from 'react-dom';
import {browserHistory} from 'react-router';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import {loadEmails} from './actions/FormAction';
import {loadAllQuestions} from './actions/PageSelectorAction';

import configureStore from './store/configureStore';


//require('./favicon.ico');
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "./styles.css";
import { syncHistoryWithStore } from  'react-router-redux';


const store = configureStore();
store.dispatch(loadEmails());
store.dispatch(loadAllQuestions());


//Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


render(
  // AppContainer and syncHistoryWithStore ????? changes
  < AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if(module.hot){
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      < AppContainer>
        <NewRoot store={store} history={history}/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

