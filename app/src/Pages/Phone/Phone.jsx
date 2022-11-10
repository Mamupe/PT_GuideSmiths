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
              <li>Name: {phone.name}</li>
              <li>Description: {phone.description}</li>
              <li>Manufacturer: {phone.manufacturer}</li>
              <li>Screen: {phone.screen}</li>
              <li>Processor: {phone.processor}</li>
              <li>Memory: {phone.ram}GB Ram</li>
              <li>Color: {phone.color}</li>
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
