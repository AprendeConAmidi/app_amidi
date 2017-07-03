import React from 'react';
import {Route} from 'react-router';
import * as paths from './routePaths';

import App from './components/App';
import FormPageConnect from './components/FormPage';
import LevelPageConnect from './components/levelPage/LevelPage';
import PageSelectorConnect from './components/pageSelector/PageSelector';
import Start from "./components/start/Start";

/*eslint-disable */
export default(
  <Route components={App}>
    <Route path={paths.INDEX} component={Start}/>
    <Route path={paths.LEVEL_PAGE} component={LevelPageConnect}/>
    <Route path={paths.LEVEL_PAGE+"/:level"} component={LevelPageConnect}/>
    <Route path={paths.SELECTOR_PAGE} component={PageSelectorConnect}/>
    <Route path={paths.POC_INPUT} component={FormPageConnect}/>
  </Route>
);
