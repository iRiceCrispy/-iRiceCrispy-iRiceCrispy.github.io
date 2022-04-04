import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => (
  <nav>
    <Link className='navLink' to='/#home'>Home</Link>
    <Link className='navLink' to='/#about'>About</Link>
    <Link className='navLink' to='/#skills'>Skills</Link>
    <Link className='navLink' to='/#projects'>Projects</Link>
    <Link className='navLink' to='/#contact'>Contact</Link>
  </nav>
);

export default Navigation;
