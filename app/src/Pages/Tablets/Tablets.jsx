import './Tablets.css';

import React from 'react';

import GetTablets from '../../Components/GetTablets/GetTablets';

export const Tablets = () => {
  return (
    <div className="tabletPage">
      <div className="TabletsContainer">
        <GetTablets />
      </div>
    </div>
  );
};

export default Tablets;
