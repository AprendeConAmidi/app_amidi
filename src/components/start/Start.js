import React from 'react';
import {Link} from 'react-router';
import * as paths from '../../routePaths';
import "./start-styles.css";
import image_start from '../../assets/img/amidi_nubes.png';

const Start = () => {
  return (
    <div className="background-red">
      <div className="containerStart">
        <img src={image_start} alt="Amidi" className="amidi"/>
        <Link className="start" to={paths.SELECTOR_PAGE}>
            <div className="start-btn">JUGAR</div>
        </Link>
      </div>
    </div>
  );
};
export default Start;
