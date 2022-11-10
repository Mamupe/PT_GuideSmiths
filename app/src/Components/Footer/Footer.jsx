import './Footer.css';

import React from 'react';

import facebook from '../../assets/social/face.svg';
import instagram from '../../assets/social/insta.svg';
import twitter from '../../assets/social/twitter.svg';
const Footer = () => {
  return (
    <div className="footerContainer">
      <p>Copyrght© 2022 MAMUPE. All Rights Reserved.</p>
      <div className="divSocial">
        <a href='https://www.facebook.com/' target="_blank"><img className="social" src={facebook} alt="facebook" /></a>
        <a href="https://www.twitter.com/"target="_blank"><img className="social" src={twitter} alt="twitter" /></a>
        <a href="https://www.instagram.com/"target="_blank"><img className="social" src={instagram} alt="instagram" /></a>
      </div>
    </div>
  );
};

export default Footer;
