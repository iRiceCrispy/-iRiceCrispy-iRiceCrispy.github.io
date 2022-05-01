import React, { useEffect, useRef, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const { pathname } = useLocation();
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const [currentRef, setCurrentRef] = useState(homeRef);
  const [resume, setResume] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://docs.google.com/document/d/1irOkn5n4OTZkBu2omhrv-Bm-5c7NoL6if-AU9UtxWjg/export?format=pdf');
      const blob = await res.blob();
      setResume(URL.createObjectURL(blob));
      setIsLoaded(true);
    })();
  }, []);

  useEffect(() => {
    switch (pathname) {
      case '/about':
        setCurrentRef(aboutRef);
        break;
      case '/skills':
        setCurrentRef(skillsRef);
        break;
      case '/projects':
        setCurrentRef(projectsRef);
        break;
      case '/contact':
        setCurrentRef(contactRef);
        break;
      default:
        setCurrentRef(homeRef);
    }
  }, [pathname]);

  useEffect(() => {
    currentRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [isLoaded, currentRef]);

  return isLoaded && (
  <div id='app'>
    <Switch>
      <Route exact path={['/', '/about', '/skills', '/projects', '/contact']}>
        <Home ref={homeRef} />
        <main>
          <Navigation />
          <About resume={resume} ref={aboutRef} />
          <Skills ref={skillsRef} />
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        </main>
      </Route>
      <Route>
        <Redirect to='/' />
      </Route>
    </Switch>
  </div>
  );
};
export default App;
