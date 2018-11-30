/* React */
import React from 'react';
import {render} from 'react-dom';
/* Route */
import { BrowserRouter, HashRouter } from 'react-router-dom';
/* Redux*/
import { Provider } from 'react-redux';
import { LastLocationProvider } from 'react-router-last-location';


import App from './app.jsx';

render(
	<BrowserRouter>
		<LastLocationProvider>
			<App/>
		</LastLocationProvider>
	</BrowserRouter>,
	document.getElementById('app')
)

import './style.scss';
