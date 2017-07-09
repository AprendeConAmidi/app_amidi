import React from 'react';
import {Route} from 'react-router';
import * as paths from './routePaths';

import App from './components/App';
import LevelPageConnect from './components/levelPage/LevelPage';
import WinnerPageConnect from './components/winnerPage/winnerPage';
import PageSelectorConnect from './components/pageSelector/PageSelector';
import Start from "./components/start/Start";

/*eslint-disable */
export default(
  <Route components={App}>
    <Route path={paths.INDEX} component={Start}/>
    <Route path={paths.LEVEL_PAGE+"/:category"} component={LevelPageConnect}/>
    <Route path={paths.SELECTOR_PAGE} component={PageSelectorConnect}/>
    <Route path={paths.WINNER} component={WinnerPageConnect}/>
  </Route>
);
