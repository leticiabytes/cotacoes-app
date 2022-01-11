import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import AppProvider from './hooks';

import './styles/global.css';

const App = () => (
	<Router>
		<AppProvider>
			<Routes />
		</AppProvider>
	</Router>
);

export default App;
