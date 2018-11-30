import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';


import Logo__Label from 'client_blocks/logo/__label/logo__label.jsx';

class Logo extends React.Component {
	render() {

		return (
			<React.Fragment>
				<a
					href="/"
					className="logo"
				>
					<Logo__Label />
				</a>
			</React.Fragment>
		)
	}
}



export default hot( module )( Logo )

// import './logo.scss';