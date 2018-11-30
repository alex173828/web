import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

// import components

class Main extends React.Component {
	render() {

		return (
			<div className="main">
				<div className="main__title">Outpace</div>
			</div>
		)
	}
}



export default hot( module )( Main )

// import './header.scss';