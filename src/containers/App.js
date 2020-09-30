import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from '~components/layout/Navigation';

import Counter from './Counter';
import Home from './Home';

import classes from './styles.scss';

const App = () => {
  return (
    <Router>
      <div className={classes.App}>
        <Navigation />

        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
