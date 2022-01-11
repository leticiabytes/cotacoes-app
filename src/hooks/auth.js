import React, { useState, createContext, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [data, setData] = useState(() => {
		const user = localStorage.getItem('@app:user');

		if (user) {
			return { user: JSON.parse(user) };
		}

		return {};
	});

	const signIn = useCallback(async ({ name, email, password }) => {
		const user = { name, email, password };

		localStorage.setItem('@app:user', JSON.stringify(user));

		setData({ user });
	}, []);

	const signOut = useCallback(() => {
		localStorage.removeItem('@app:user');

		setData({});
	}, []);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('userAuth must be used within an AuthProvider');
	}

	return context;
}

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
