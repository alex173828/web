import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

// import components
import Navigation__Button from 'client_blocks/navigation/__button/navigation__button.jsx';
import Navigation__List from 'client_blocks/navigation/__list/navigation__list.jsx';

class Navigation extends React.Component {
	render() {

		return (
			<React.Fragment>
				<div 
					className="navigation"
				>
					<Navigation__Button />
					<Navigation__List />
				</div>
			</React.Fragment>
		)
	}
}



export default hot( module )( Navigation )

// import './header.scss';