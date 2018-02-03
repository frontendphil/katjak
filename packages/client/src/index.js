import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'

import SplashScreen from './SplashScreen'
import App from './App';

import aboutRoutes from './about'
import contactRoutes from './contact'

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ SplashScreen } />
    <Route path="/content" component={ App }>
      { aboutRoutes }
      { contactRoutes }
    </Route>
  </Router>,
  document.getElementById('root')
);
