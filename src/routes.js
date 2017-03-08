import React from 'react';
import { Route } from 'react-router';
import App from './App';
import EditBlog from './EditBlog';

export default (
  <Route>
    <Route path="/" component={App} />
    <Route path='/editblog/:id' component={EditBlog} />
  </Route>
)