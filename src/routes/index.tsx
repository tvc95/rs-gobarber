import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../Pages/Landing';
import SignUp from '../Pages/SignUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
