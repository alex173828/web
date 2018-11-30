import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

// import components

class Navigation__List extends React.Component {
	render() {
		return (
			<div id="navigation__list" className="list navigation__list">
				<svg className="button button_close navigation__button_close">
					<use href="#cancel" />
				</svg>
				<a href="#about" className="list__item list__item_navigation">Наше агенство</a>
				<a href="#bloggers" className="list__item list__item_navigation">Наши блогеры <sup className="numberOfBloggers">8</sup></a>
				<a href="#clients" className="list__item list__item_navigation">Наши клиенты</a>
				<a href="#footer" className="list__item list__item_navigation">Контакты</a>
			</div>
		)
	}
}



export default hot( module )( Navigation__List )

// import './navigation__list.scss';