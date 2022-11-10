import './GetTables.css';

import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

export const GetTablets = () => {
  const [TabletsList, setTabletsList] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch('http://localhost:8080/tablets').then((res) => res.json());
      setTabletsList(data);
    })();
  }, []);

  return (
    <>
      {TabletsList.map((tablet) => (
        <div className="contTablets" key={tablet.id}>
          <Popup
            trigger={
              <button className="popBtn">
                <img className="tabletImg" src={tablet.imageFront} alt="tablet image" />
              </button>
            }
            modal
            nested
          >
            <div className="pop">
              <h2>{tablet.name}</h2>
              <img className="tabletImg" src={tablet.imageFront} alt="tablet image" />
              <p>{tablet.description}</p>
              <Link to={`/tablet/${tablet.id}`}>
                <button className="moreInfo">+ Info</button>
              </Link>
            </div>
          </Popup>

          <h3 className="name">{tablet.name}</h3>
          <p className="preinfo">
            {tablet.screen} {tablet.processor} {tablet.ram}GB RAM
          </p>
          <h3 className="price">{tablet.price}$</h3>
        </div>
      ))}
    </>
  );
};

export default GetTablets;
