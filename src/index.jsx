import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from './App';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

const Root = () => {
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

  return isLoaded && (
    <BrowserRouter>
      {' '}
      <Switch>
        <Route exact path={['/', '/about', '/skills', '/projects', '/contact']}>
          <App resume={resume} />
        </Route>
        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
