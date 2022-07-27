import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section_padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-text'>Contact Us</h1>
        <p className='p__opensans'>My Long Adress 123, City Name, State</p>
        <p className='p__opensans'>+123 45 678 999</p>
        <p className='p__opensans'>+123 45 678 999</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="" />
        <p className='p__opensans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <img src={images.spoon} alt="sponn" className='spoon_img' style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-text'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday:</p>
        <p className='p__opensans'>10am - 2am</p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>10am - 3am</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
