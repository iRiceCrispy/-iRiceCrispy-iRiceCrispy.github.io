import React from 'react';
import profile from '../../assets/profile.png';
import './About.scss';

const about = 'I am a passionate and creative Software Engineer who loves putting ideas together into a working application. I have experience building dynamic web applications in JavaScript and Python using Node.js, Express.js, Flask, React/Redux, PostgreSQL, and MongoDB, and creating Discord Bots using Discord.js. Currently, I am planning/working on creating an application that helps manage boss drops for one of my favorite video games, as well as creating my very own text-based RPG that will live inside a Discord Bot.';

const About = ({ resume }) => (
  <section id='about'>
    <h2 className='heading'>About Me</h2>
    <div className='content'>
      <div className='about'>
        <img className='profile' src={profile} alt='profile' />
        <p>
          {about}
        </p>
      </div>
      <div className='details'>
        <div className='detail location'>
          <span className='icon'><i className='bi bi-geo-alt' /></span>
          <span>San Francisco Bay Area, CA</span>
        </div>
        <a className='detail resume' href={resume} target='_blank' rel='noreferrer'>
          <span className='icon'><i className='bi bi-file-earmark-person' /></span>
          <span>Resume</span>
        </a>
      </div>
    </div>
  </section>
);

export default About;
