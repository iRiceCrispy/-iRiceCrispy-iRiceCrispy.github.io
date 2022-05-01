import React, { forwardRef } from 'react';
import './Home.scss';

const Home = (_props, ref) => (
  <header id='home' ref={ref}>
    <div className='content'>
      <h1>Eric Huang</h1>
      <p>Software Engineer</p>
    </div>
    <div className='filter' />
  </header>
);

export default forwardRef(Home);
