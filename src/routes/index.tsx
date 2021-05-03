import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../Pages/Landing';
import SignUp from '../Pages/SignUp';
import Dashboard from '../Pages/Dashboard';
import ForgotPassword from '../Pages/Forgot Password';
import ResetPassword from '../Pages/Reset Password';
import Profile from '../Pages/Profile';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
