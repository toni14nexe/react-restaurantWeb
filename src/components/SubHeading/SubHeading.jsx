import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div sytle={{ margingBottom: '1rem' }}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon_img' />
  </div>
);

export default SubHeading;
