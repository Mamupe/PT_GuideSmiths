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
    <div className="phoneDetail">
      {tablet ? (
        <div className="infoPhone">
          <h3 className="encabezado">{tablet.name}</h3>
          <img className="front" src={tablet.imageFront} alt={tablet.name} />
          <img className="perfil" src={tablet.imagePerfil} alt={tablet.name} />
          <img className="back" src={tablet.imageBack} alt={tablet.name} />
        </div>
      ) : (
        <div>Not Exists</div>
      )}
    </div>
  );
};
export default Tablet;
