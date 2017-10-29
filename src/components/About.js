import React from 'react';
import Header from './Header';

const About = () => (
  <div className='landing-page'>
    <Header hideNav={true} />
    <h1 style={{ color: 'rgba(0,0,0,0.5)' }}>
      Medical Transcriptions Made Simple
    </h1>
    <blockquote>
      "EHRs were implemented to improve the efficiency and quality of patient
      care, but they have yet to achieve that promise,"
    </blockquote>
    <h4 style={{ color: 'rgba(0,0,0,0.8)', marginTop: '0.2em' }}>
      Susan Hingle, MD
    </h4>
  </div>
);

export default About;
