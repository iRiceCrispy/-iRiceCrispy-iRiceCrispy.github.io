import React, { useState } from 'react';
import chaosManoPreivew from '../../assets/chaos-mano-home.png';
import robinsockPreview from '../../assets/robinsock-home.png';
import gelpPreview from '../../assets/gelp-home.png';
import './Projects.scss';

const projects = {
  chaosMano: {
    title: 'Chaos Mano',
    description: 'A boss drop tracker app.',
    technologies: [
      'JavaScript',
      'React',
      'Redux',
      'Node.js',
      'Express',
      'HTML',
      'CSS',
      'MongoDB',
      'mongoose',
    ],
    thumbnail: chaosManoPreivew,
    github: 'https://github.com/iRiceCrispy/Chaos-Mano',
    livesite: 'https://chaos-mano.herokuapp.com/',
  },
  robinSock: {
    title: 'RobinSock',
    description: 'A paper trading app.',
    technologies: [
      'JavaScript',
      'Python',
      'React',
      'Redux',
      'Flask',
      'HTML',
      'CSS',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
    ],
    thumbnail: robinsockPreview,
    github: 'https://github.com/pierikm/robinhood-clone',
    livesite: 'https://robinsock.herokuapp.com/',
  },
  gelp: {
    title: 'Gelp',
    description: 'A game review app.',
    technologies: [
      'JavaScript',
      'React',
      'Redux',
      'Node.js',
      'Express',
      'HTML',
      'CSS',
      'PostgreSQL',
      'Sequelize',
    ],
    thumbnail: gelpPreview,
    github: 'https://github.com/iRiceCrispy/Gelp',
    livesite: 'https://yelpforgames.herokuapp.com/',
  },
};

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(projects.chaosMano);

  return (
    <section id='projects'>
      <h2 className='heading'>Projects</h2>
      <div className='content'>
        <div className='previews'>
          {Object.entries(projects).map(([id, project]) => (
            <div
              className={`preview${currentProject === project ? ' selected' : ''}`}
              key={id}
              role='button'
              tabIndex={0}
              onClick={() => setCurrentProject(projects[id])}
            >
              <p className='title'>{project.title}</p>
              <img src={project.thumbnail} alt={project.title} />
            </div>
          ))}
        </div>
        <div className='details'>
          <img src={currentProject.thumbnail} alt={currentProject.title} />
          <div className='header'>
            <p className='title'>{currentProject.title}</p>
            <p className='description'>{currentProject.description}</p>
          </div>
          <div className='body'>
            <p>Technlogies</p>
            <p className='technologies'>{currentProject.technologies.join(' | ')}</p>
          </div>
          <div className='footer'>
            <a href={currentProject.github} target='_blank' rel='noreferrer'>GitHub</a>
            <a href={currentProject.livesite} target='_blank' rel='noreferrer'>Livesite</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
