import React from 'react';
import { SubHeading} from '../../components';
import { images } from "../../constants";

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>My long adress 123, City Name, State</p>
        <p className='p__cormorant' style={{color: '#DCC87', margin: '2rem 0'}}>Open Hours</p>
        <p className='p__opensans'>Mon - Fri: 10am - 2am</p>
        <p className='p__opensans'>Sat - Sun: 10am - 3am</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
