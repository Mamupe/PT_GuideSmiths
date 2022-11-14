import './Tablets.css';

import React from 'react';

import GetTablets from '../../Components/GetTablets/GetTablets';
import Loading from '../../Components/Loading/Loading';
import useTimeout from '../../utils/useTimeout';

export const Tablets = () => {
  const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false);
  useTimeout(() => {
    setHasTimeElapsed(true);
  }, 2000);
  if (hasTimeElapsed) {
    return (
      <div className="tabletPage">
      <h2>TABLETS</h2>
        <div className="PhonesContainer">
          <GetTablets />
        </div>
      </div>
    );
  } else {
    return (
      <div className="tabletPage">
      <h2>TABLETS</h2>
        <div className="PhonesContainer">
          <Loading />
        </div>
      </div>
    );
  }
};

export default Tablets;
