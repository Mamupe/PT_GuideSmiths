import './Phones.css';

import React from 'react';

import GetPhones from '../../Components/GetPhones/GetPhones';

export const Phones = () => {
  return (
    <div className="phonePage">
      <div className="PhonesContainer">
        <GetPhones />
      </div>
    </div>
  );
};

export default Phones;
