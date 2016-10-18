import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'

import App from './App';

import aboutRoutes from './about'

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      { aboutRoutes }
    </Route>
  </Router>,
  document.getElementById('root')
);
