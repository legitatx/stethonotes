import React from 'react';
import Header from './Header';

const About = () => (
  <div className='landing-page'>
    <Header hideNav={true} />
    <h1 style={{ color: 'rgba(0,0,0,0.5)' }}>
      Medical Transcriptions Made Simple
    </h1>
  </div>
);

export default About;
