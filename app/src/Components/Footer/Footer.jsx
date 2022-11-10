import './Footer.css';

import React from 'react';

import facebook from '../../assets/social/facebook-white.svg';
import instagram from '../../assets/social/instagram-white.svg';
import twitter from '../../assets/social/twitter-white.svg';
const Footer = () => {
  return (
    <div className='footerContainer'>
      <p>Copyrght© 2022 MAMUPE. All Rights Reserved.</p>
      <div className="divSocial">
        <img className="social" src={facebook} alt="facebook" />
        <img className="social" src={twitter} alt="twitter" />
        <img className="social" src={instagram} alt="instagram" />
      </div>
    </div>
  );
};

export default Footer;
