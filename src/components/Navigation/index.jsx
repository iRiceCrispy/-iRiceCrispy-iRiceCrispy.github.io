import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = ({ refs, setTargetElement }) => {
  const navTo = location => {
    const target = refs[location].current;
    target.scrollIntoView({ behavior: 'smooth' });
    setTargetElement(target);
  };

  return (
    <nav>
      <NavLink
        className='navLink'
        activeClassName='active'
        exact
        to='/'
        onClick={() => navTo('home')}
      >
        Home
      </NavLink>
      <NavLink
        className='navLink'
        activeClassName='active'
        exact
        to='/about'
        onClick={() => navTo('about')}
      >
        About
      </NavLink>
      <NavLink
        className='navLink'
        activeClassName='active'
        exact
        to='/skills'
        onClick={() => navTo('skills')}
      >
        Skills
      </NavLink>
      <NavLink
        className='navLink'
        activeClassName='active'
        exact
        to='/projects'
        onClick={() => navTo('projects')}
      >
        Projects
      </NavLink>
      <NavLink
        className='navLink'
        activeClassName='active'
        exact
        to='/contact'
        onClick={() => navTo('contact')}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
