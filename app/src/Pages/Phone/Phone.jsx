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
          <h3 className="encabezado">{phone.name}</h3>
          <img className="front" src={phone.imageFront} alt={phone.name} />
          <img className="perfil" src={phone.imagePerfil} alt={phone.name} />
          <img className="back" src={phone.imageBack} alt={phone.name} />
        </div>
      ) : (
        <div>Not Exists</div>
      )}
    </div>
  );
};
export default Phone;
