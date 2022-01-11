import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
	<Switch>
		<Route path="/" exact component={Login} isPrivate={false} />
		<Route path="/dashboard" component={Dashboard} isPrivate />
	</Switch>
);

export default Routes;
