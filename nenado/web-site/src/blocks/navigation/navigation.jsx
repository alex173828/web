import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = ({isActive, onClickHandler}) => (
	<div className={`navigation ${isActive ? "navigation_active" : ""}`}>
		<NavLink
			to="/about"
			className="link navigation__link"
			activeClassName="navigation__link_active"
			onClick={onClickHandler}
		>
			О компании
		</NavLink>

		<NavLink
			to="/experience"
			className="link navigation__link"
			activeClassName="navigation__link_active"
			onClick={onClickHandler}
		>
			Наш опыт
		</NavLink>

		<NavLink
			to="/services"
			className="link navigation__link"
			activeClassName="navigation__link_active"
			onClick={onClickHandler}
		>
			Услуги
		</NavLink>

		<NavLink
			to="/team"
			className="link navigation__link"
			activeClassName="navigation__link_active"
			onClick={onClickHandler}
		>
			Команда
		</NavLink>

		<NavLink
			to="/communications"
			className="link navigation__link"
			activeClassName="navigation__link_active"
			onClick={onClickHandler}
		>
			Контакты
		</NavLink>
	</div>
);


export default Navigation;

// import './header.scss';
