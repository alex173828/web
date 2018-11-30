import React, { Component } from 'react';
import classNameNames from 'classnames';
 
import { NavLink } from 'react-router-dom';


class Sidebar extends React.Component {
  render() {

    return (
    	<div className="sidebar">
    		<div className="bullets sidebar__bullets">
				<NavLink
                    exact to="/"
                    className="bullets__item bullets__item_sidebar"
                    activeClassName="bullets__item_active">
                </NavLink>
				<NavLink
                    to="/about"
                    className="bullets__item bullets__item_sidebar"
                    activeClassName="bullets__item_active">
                </NavLink>
				<NavLink
                    to="/experience"
                    className="bullets__item bullets__item_sidebar"
                    activeClassName="bullets__item_active">
                </NavLink>
				<NavLink
                    to="/services"
                    className="bullets__item bullets__item_sidebar"
                    activeClassName="bullets__item_active">
                </NavLink>
				<NavLink
                    to="/team"
                    className="bullets__item bullets__item_sidebar"
                    activeClassName="bullets__item_active">
                </NavLink>
				<NavLink
                    to="/communications"
                    className="bullets__item bullets__item_sidebar"
                    activeClassName="bullets__item_active">
                </NavLink>
				{/* <div className="bullets__item bullets__item_sidebar bullets__item_active"></div>
				<div className="bullets__item bullets__item_sidebar"></div>
				<div className="bullets__item bullets__item_sidebar"></div>
				<div className="bullets__item bullets__item_sidebar"></div>
				<div className="bullets__item bullets__item_sidebar"></div>
				<div className="bullets__item bullets__item_sidebar"></div> */}
			</div>
    	</div>
    );
  }
}


export default( Sidebar )

import './sidebar.scss';
