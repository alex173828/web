import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

import Logo__Label from 'client_blocks/logo/__label/logo__label.jsx';

class Header__Logo extends React.Component {
	render() {

		return (
			<React.Fragment>
				<a
					href="#"
					id="header__logo"
					className="header__logo"
				>
					<Logo__Label />
				</a>
			</React.Fragment>
		)
	}
}



export default hot( module )( Header__Logo )

// import './header__logo.scss';