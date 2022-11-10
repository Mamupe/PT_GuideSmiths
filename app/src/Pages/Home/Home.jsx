import './Home.css';

import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="homeDiv">
      <Link to="/phones"><div className="homePhone">
        <img
          src="https://res.cloudinary.com/dghnwllrc/image/upload/v1668021793/Phones/phone_ekwshp.jpg"
          alt="phone image"
        />
      </div></Link>
      <Link to="/tablets"><div className="homeTablet">  <img
          src="https://res.cloudinary.com/dghnwllrc/image/upload/v1668021794/Phones/tablet_rmt7fg.png"
          alt="tablet image"
        /></div></Link>
    </div>
  );
};

export default Home;
