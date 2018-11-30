import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';


class Button extends React.Component {
	render() {
		return (
			<div className="button"></div>
		)
	}
}



export default hot( module )( Button )

// import './button.scss';