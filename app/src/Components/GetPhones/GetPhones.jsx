import './GetPhones.css';

import { useEffect, useState } from 'react';
import React from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

export const GetPhones = () => {
  const [phonesList, setPhonesList] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch('http://localhost:8080/phones').then((res) => res.json());
      setPhonesList(data);
    })();
  }, []);

  return (
    <>
      {phonesList.map((phone) => (
        <div className="contPhones" key={phone.id}>
          <Popup
            trigger={
              <button className="popBtn">
                <img className="phoneImg" src={phone.imageFront} alt="Phone image" />
              </button>
            }
            modal
            nested
          >
            <div className="pop">
              <h2>{phone.name}</h2>
              <img className="phoneImg" src={phone.imageFront} alt="Phone image" />
              <p>{phone.description}</p>
              <Link to={`/phone/${phone.id}`}><button className='moreInfo'>+ Info</button></Link>
            </div>
          </Popup>

          <h3>{phone.name}</h3>
        </div>
      ))}
    </>
  );
};

export default GetPhones;
