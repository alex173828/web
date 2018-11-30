import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';


class Navigation__Button extends React.Component {
	render() {
		return (
			<svg className="button navigation__button">
					<use href="#menu" />
			</svg>
		)
	}
}



export default hot( module )( Navigation__Button )

// import './_navigation__button.scss';