import React, { forwardRef, useState } from 'react';
import whatToCookPreview from '../../assets/what-to-cook-home.png';
import chaosManoPreivew from '../../assets/chaos-mano-home.png';
import robinsockPreview from '../../assets/robinsock-home.png';
import gelpPreview from '../../assets/gelp-home.png';
import './Projects.scss';

const projects = {
  whatToCook: {
    title: 'What To Cook',
    description: 'A recipe sharing app',
    technologies: [
      'JavaScript',
      'Python',
      'React',
      'Redux',
      'Flask',
      'HTML',
      'CSS',
      'Material-UI',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'Firebase',
    ],
    thumbnail: whatToCookPreview,
    github: 'https://github.com/iRiceCrispy/What-To-Cook',
    livesite: 'https://whattocook.iricecrispy.dev/',
  },
  chaosMano: {
    title: 'Chaos Mano',
    description: 'A boss drop tracker app for Maplestory.',
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
    livesite: 'https://chaosmano.iricecrispy.dev/',
  },
  robinSock: {
    title: 'RobinSock',
    description: 'A paper stock trading app.',
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
      'Finnhub API',
    ],
    thumbnail: robinsockPreview,
    github: 'https://github.com/pierikm/robinhood-clone',
    livesite: 'https://robinsock.iricecrispy.dev/',
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
    livesite: 'https://gelp.iricecrispy.dev/',
  },
};

const Projects = (_props, ref) => {
  const [currentProject, setCurrentProject] = useState(projects.chaosMano);

  return (
    <section id='projects' ref={ref}>
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

export default forwardRef(Projects);
