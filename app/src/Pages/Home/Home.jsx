import './Home.css';

import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="homeDiv">
      <Link to="/phones"><div className="homePhone">
        <img
          src="https://res.cloudinary.com/dghnwllrc/image/upload/v1668080225/Phones/phone-removebg-preview_exotu7.png"
          alt="phone image"
        />
      </div></Link>
      <Link to="/tablets"><div className="homeTablet">  <img
          src="https://res.cloudinary.com/dghnwllrc/image/upload/v1668080225/Phones/tablet-removebg-preview_ujsufu.png"
          alt="tablet image"
        /></div></Link>
    </div>
  );
};

export default Home;
