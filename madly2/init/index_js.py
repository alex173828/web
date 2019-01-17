index_js = """import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import App from './app.jsx';

const mountPoint = document.getElementById('app');

render(
	<BrowserRouter>
		<LastLocationProvider>
			<App
				{...{mountPoint}}
			/>
		</LastLocationProvider>
	</BrowserRouter>,
	mountPoint
)

import './style.scss';
""";
