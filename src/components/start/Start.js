import React from 'react';
import {Link} from 'react-router';
import * as paths from '../../routePaths';
import "./start-styles.css";

const Start = () => {
  return (
    <div className="background-red">
      <img src="../../assets/img/amidi_nubes.png" alt="Amidi" className="amidi"/>
      <Link className="start" to={paths.LEVEL_PAGE}>
          <div className="start-btn">JUGAR</div>
      </Link>
    </div>
  );
};
export default Start;
