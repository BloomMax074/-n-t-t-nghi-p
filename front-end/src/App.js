import React, { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './container/components/home/Home';
import CheckMenu from './container/components/checkmenu/CheckMenu';
import { checkBar } from './container/javascript/Functions';

function App() {
  useEffect(() => {
    checkBar();
  }, []);

  const [isLoad, setIsLoad] = useState(true);
  const handleLogin = () => {
    setIsLoad(!isLoad);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route>
            <CheckMenu />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
