import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav>
    <Link className='navLink' to='/'>Home</Link>
    <Link className='navLink' to='/about'>About</Link>
    <Link className='navLink' to='/skills'>Skills</Link>
    <Link className='navLink' to='/projects'>Projects</Link>
    <Link className='navLink' to='/contact'>Contact</Link>
  </nav>
);

export default Navigation;
