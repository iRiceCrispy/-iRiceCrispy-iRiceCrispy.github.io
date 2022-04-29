import React, { useEffect, useState } from 'react';
import { HashRouter as Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [url, setUrl] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://docs.google.com/document/d/1irOkn5n4OTZkBu2omhrv-Bm-5c7NoL6if-AU9UtxWjg/export?format=pdf');
      const blob = await res.blob();
      setUrl(URL.createObjectURL(blob));
      setIsLoaded(true);
    })();
  }, []);

  return isLoaded && (
    <div id='app'>
      <Route path='/#home'><Home /></Route>
      <main>
        <Navigation />
        <Route path='/#about'><About resume={url} /></Route>
        <Route path='/#skills'><Skills /></Route>
        <Route path='/#projects'><Projects /></Route>
        <Route path='/#contact'><Contact /></Route>
      </main>
    </div>
  );
};
export default App;
