import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as routesPath from '../../routePaths';
import image_amidi2 from '../../assets/img/amidi2.png';
import "./winnerPage.css";

export class WinnerPage extends React.Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="box">
        <img src={image_amidi2} alt="Amidi" className="amidiWinner"/>
        <h2>¡Felicidades!</h2>
        <h4>Has ayudado a Amidi a recuperar un poco más de la historia de Canarias</h4>
        <p>Si quieres puedes seguir ayudándole recuperando más páginas.</p>
        <div className="cta">
          <Link to={routesPath.SELECTOR_PAGE}>Continuar</Link>
        </div>
      </div>
    );
  }
}


export default connect(() =>{}, () =>{})(WinnerPage);
