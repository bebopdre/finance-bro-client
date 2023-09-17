import React from "react";
import "../../pages/AdventurePage/AdventurePage.scss";
import { Link } from "react-router-dom";
import wispyWillows from '../../assets/icons/wispy-willows.svg';
import cherryCreek from '../../assets/icons/cherryCreek.svg';
import islaMorada from '../../assets/icons/islaMorada.svg';
import wynwood from '../../assets/icons/wynwood.svg';
import steelDistrict from '../../assets/icons/steelDistrict.svg';
import arcadiaBay from '../../assets/icons/arcadiaBay.svg';
import elCapitan from '../../assets/icons/elCapitan.svg';

const AdventurePage = () => {

  const pics = [wispyWillows, cherryCreek, islaMorada, wynwood, steelDistrict, arcadiaBay, elCapitan];
  const names = ['Wispy Willows', 'Cherry Creek', 'Isla Morada', 'Wynwood', 'Steel District', 'Arcadia Bay', 'El Capitan'];

  return (
    <div className="adventure">
      <h1 className="adventure__title">Start your Adventure</h1>
      <section className="adventure__paths">
        {
          pics.map( (pic, index) => (
            <Link to="/game" className="adventure__image-container">
              <img className="adventure__image" src={pic}></img>
              <p className="adventure__image-name">
                {names[index]}
              </p>
            </Link>
          ))
        }
      </section>
    </div>
  );
};

export default AdventurePage;
