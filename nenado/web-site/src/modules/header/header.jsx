import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';

import Navigation from 'blocks/navigation/navigation.jsx';
import Logo from 'blocks/logo/logo.jsx';



class Header extends React.Component {
	constructor(props) {
		super(props);

		this._routesWhite = ['/', '/experience', '/team'];
		this._routesBlack = ['/about', '/services', '/communications'];

		this.state = {
			isMenuOpen: false
		};
	}

	toggleMenu() {
		this.setState({
			isMenuOpen: !this.state.isMenuOpen
		})
	}

	closeMenu() {
		this.setState({
			isMenuOpen: false
		})
	}

	render() {
		const clsMenu = `hamburger menu__hamburger hamburger_type_slider ${this.state.isMenuOpen ? 'is-active' : ''}`;

		const curPath = this.props.location.pathname;
		const lastPath = this.props.lastLocation? this.props.lastLocation.pathname : curPath;

		const isWhiteActive = this._routesWhite.includes(curPath);
		const needChange = isWhiteActive != this._routesWhite.includes(lastPath);

		return (
			<div className="header">
				<Logo
					isWhiteActive={isWhiteActive}
				/>
				<div className="menu">
					<button
						onClick={this.toggleMenu.bind(this)}
						className={clsMenu}>
						<span className="hamburger__box">
							<span className="hamburger__inner"></span>
						</span>
					</button>
					<Navigation
						isActive={this.state.isMenuOpen}
						onClickHandler={this.closeMenu.bind(this)}
					/>
				</div>
			</div>
		)
	}
}



export default (withLastLocation(Header))

// import './header.scss';
