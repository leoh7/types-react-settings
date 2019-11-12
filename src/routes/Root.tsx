import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/Home';
import RenderTest from '../pages/renderTest/RenderTest';

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/render" component={RenderTest} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;