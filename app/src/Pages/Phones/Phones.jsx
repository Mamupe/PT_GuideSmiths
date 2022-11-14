import './Phones.css';

import React from 'react';

import GetPhones from '../../Components/GetPhones/GetPhones';
import Loading from '../../Components/Loading/Loading';
import useTimeout from '../../utils/useTimeout';

export const Phones = () => {
  const [hasTimeElapsed, setHasTimeElapsed] = React.useState(false);
  useTimeout(() => {
    setHasTimeElapsed(true);
  }, 2000);
  if (hasTimeElapsed) {
    return (
      <div className="phonePage">
        <h2>PHONES</h2>
        <div className="PhonesContainer">
          <GetPhones />
        </div>
      </div>
    );
  } else {
    return (
      <div className="phonePage">
        <h2>PHONES</h2>
        <div className="PhonesContainer">
          <Loading />
        </div>
      </div>
    );
  }
};
export default Phones;
