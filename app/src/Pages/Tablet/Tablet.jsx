import './Tablet.css';

import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Tablet = () => {
  const [tablet, setTablet] = useState({});

  const params = useParams();

  const { id } = params;

  useEffect(() => {
    const getTablet = async () => {
      const data = await fetch(`http://localhost:8080/tablets/${id}`);
      const res = await data.json();
      setTablet(res);
    };

    getTablet();
  }, []);

  return (
    <div className="tabletDetail">
      <h2>{tablet.name}</h2>
      {tablet ? (
        <div className="infoTablet">
          <div className="imagesDetail">
            <img className="front" src={tablet.imageFront} alt={tablet.name} />
            <img className="perfil" src={tablet.imagePerfil} alt={tablet.name} />
            <img className="back" src={tablet.imageBack} alt={tablet.name} />
          </div>
          <div className="caract">
            <ul>
              <li>
                <strong>Name:</strong> {tablet.name}
              </li>
              <li>
                <strong>Description:</strong> {tablet.description}
              </li>
              <li>
                <strong>Manufacturer:</strong> {tablet.manufacturer}
              </li>
              <li>
                <strong>Screen:</strong> {tablet.screen}
              </li>
              <li>
                <strong>Processor:</strong> {tablet.processor}
              </li>
              <li>
                <strong>Memory:</strong> {tablet.ram}GB Ram
              </li>
              <li>
                <strong>Color:</strong> {tablet.color}
              </li>
              <li>
                <strong>Price:</strong> {tablet.price} $
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>Not Exists</div>
      )}
    </div>
  );
};
export default Tablet;
