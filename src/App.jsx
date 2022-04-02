import React from 'react';
import { HashRouter as Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => (
  <div id='app'>
    <nav>
      <Navigation />
    </nav>
    <main id='content'>
      <Route path='/#home'><Home /></Route>
      <Route path='/#about'><About /></Route>
      <Route path='/#skills'><Skills /></Route>
      <Route path='/#projects'><Projects /></Route>
      <Route path='/#contact'><Contact /></Route>
    </main>
  </div>
);

export default App;
