import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = ({ resume }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const [currentElement, setCurrentElement] = useState(null);
  const [targetElement, setTargetElement] = useState(null);

  const refs = useMemo(() => ({
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentElement(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
      }
    );

    Object.values(refs).forEach(ref => {
      observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, [refs]);

  useEffect(() => {
    if (currentElement && !targetElement) {
      const path = currentElement.id === 'home' ? '/' : `/${currentElement.id}`;
      history.replace(path);
    }

    if (targetElement && currentElement === targetElement) setTargetElement(null);
  }, [currentElement, targetElement, history]);

  useEffect(() => {
    const location = pathname.split('/')[1];
    refs[location || 'home'].current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div id='app'>

      <Home ref={homeRef} />
      <main>
        <Navigation setTargetElement={setTargetElement} refs={refs} />
        <About resume={resume} ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>

    </div>
  );
};
export default App;
