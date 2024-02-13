import React, { forwardRef } from 'react';
import './Skills.scss';

const skills = [{
  title: 'JavaScript',
  icon: <i className='devicon-javascript-plain colored' />,
}, {
  title: 'Python',
  icon: <i className='devicon-python-plain colored' />,
}, {
  title: 'C#',
  icon: <i className='devicon-csharp-plain colored' />,
}, {
  title: 'Java',
  icon: <i className='devicon-java-plain colored' />,
}, {
  title: 'Node.js',
  icon: <i className='devicon-nodejs-plain colored' />,
}, {
  title: 'React',
  icon: <i className='devicon-react-original colored' />,
}, {
  title: 'Redux',
  icon: <i className='devicon-redux-original colored' />,
}, {
  title: 'Express',
  icon: <i className='devicon-express-original' />,
}, {
  title: 'Flask',
  icon: <i className='devicon-flask-original' />,
}, {
  title: 'MongoDB',
  icon: <i className='devicon-mongodb-plain colored' />,
}, {
  title: 'PostgreSQL',
  icon: <i className='devicon-postgresql-plain colored' />,
}, {
  title: 'MySQL',
  icon: <i className='devicon-mysql-plain colored' />,
}, {
  title: 'SQLAlchemy',
  icon: <i className='devicon-sqlalchemy-plain' />,
}, {
  title: 'Sequelize',
  icon: <i className='devicon-sequelize-plain colored' />,
}, {
  title: 'Mongoose',
  icon: <i className='devicon-mongoose-original colored' />,
}, {
  title: 'Git',
  icon: <i className='devicon-git-plain colored' />,
}, {
  title: 'Docker',
  icon: <i className='devicon-docker-plain colored' />,
}, {
  title: 'Firebase',
  icon: <i className='devicon-firebase-plain colored' />,
}, {
  title: 'DigitalOcean',
  icon: <i className='devicon-digitalocean-original colored' />,
}, {
  title: 'Unity',
  icon: <i className='devicon-unity-plain' />,
}];

const Skills = (_props, ref) => (
  <section id='skills' ref={ref}>
    <h2 className='heading'>Skills</h2>
    <div className='content'>
      <div className='skills'>
        {skills.map(skill => (
          <div className='skill' key={skill.title}>
            <div className='icon'>{skill.icon}</div>
            <p className='title'>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default forwardRef(Skills);
