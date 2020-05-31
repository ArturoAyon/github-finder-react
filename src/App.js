import React from 'react';
import './App.css';
import NavBar from './components/layouts/NavBar';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import User from './components/users/User';
import Home from './components/pages/Home';
import Alert from './components/layouts/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <NavBar title='Github Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert alert={alert} />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
