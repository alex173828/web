/* React */
import React from 'react';
import {render} from 'react-dom';
/* Route */
import { BrowserRouter } from 'react-router-dom';
/* Redux*/
import { Provider } from 'react-redux';

import App from './app.jsx';

render(
	<App />,
	document.getElementById('app')
	)


const header = document.getElementById('header');
const header__logo = document.getElementById('header__logo');
const headerTop = header.getBoundingClientRect().top + window.pageYOffset;

window.onscroll = function() {
	if(header.classList.contains('header_fixed') && window.pageYOffset < headerTop) {
		header.classList.remove('header_fixed');
		header__logo.classList.remove('header__logo_visible');

	} else if (window.pageYOffset > headerTop) {
		header.classList.add('header_fixed');
		header__logo.classList.add('header__logo_visible');
	}
};



import './style.scss';
