import './Phone.css';

import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Phone = () => {
  const [phone, setPhone] = useState({});

  const params = useParams();

  const { id } = params;

  useEffect(() => {
    const getPhone = async () => {
      const data = await fetch(`http://localhost:8080/phones/${id}`);
      const res = await data.json();
      setPhone(res);
    };

    getPhone();
  }, []);

  return (
    <div className="phoneDetail">
      {phone ? (
        <div className="infoPhone">
          <div className="imagesDetail">
            <img className="front" src={phone.imageFront} alt={phone.name} />
            <img className="perfil" src={phone.imagePerfil} alt={phone.name} />
            <img className="back" src={phone.imageBack} alt={phone.name} />
          </div>
          <div className="caract">
            <ul>
              <li>
                <strong>Name:</strong> {phone.name}
              </li>
              <li>
                <strong>Description:</strong> {phone.description}
              </li>
              <li>
                <strong>Manufacturer:</strong> {phone.manufacturer}
              </li>
              <li>
                <strong>Screen:</strong> {phone.screen}
              </li>
              <li>
                <strong>Processor:</strong> {phone.processor}
              </li>
              <li>
                <strong>Memory:</strong> {phone.ram}GB Ram
              </li>
              <li>
                <strong>Color:</strong> {phone.color}
              </li>
              <li>
                <strong>Price:</strong> {phone.price} $
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
export default Phone;
