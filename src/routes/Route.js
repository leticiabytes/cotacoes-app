import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from '../hooks/auth';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
	const { user } = useAuth();

	return (
		<ReactDOMRoute
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...rest}
			render={({ location }) =>
				isPrivate === !!user ? (
					<Component />
				) : (
					<Redirect
						to={{
							pathname: isPrivate ? '/' : '/dashboard',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

Route.propTypes = {
	isPrivate: PropTypes.bool.isRequired,
};

export default Route;
