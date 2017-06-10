import React from 'react';
import {Route} from 'react-router';
import * as paths from './routePaths'

import App from './components/App';
import FormPageConnect from './components/FormPage';
import Start from "./components/start/Start";

/*eslint-disable */
export default(
  <Route components={App}>
    <Route path={paths.INDEX} component={Start}/>
    <Route path={paths.POC_INPUT} component={FormPageConnect}/>
  </Route>
);
