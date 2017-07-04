import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
import * as routesPath from '../../routePaths';

export class WinnerPage extends React.Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Página Recuperada</h1>
        <Link to={routesPath.SELECTOR_PAGE}>Continuar</Link>
      </div>
    );
  }
}


export default connect(() =>{}, () =>{})(WinnerPage);
