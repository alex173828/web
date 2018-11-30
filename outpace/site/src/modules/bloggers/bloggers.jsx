import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

// import components
import Bloggers__Card from 'client_modules/bloggers/__card/bloggers__card.jsx';

class Bloggers extends React.Component {
	render() {

		return (
			<div id="bloggers" className="bloggers">
				<div className="title bloggers__title">Наши блоггеры</div>
				<div className="bloggers__section">
					<Bloggers__Card />
					<Bloggers__Card />
					<Bloggers__Card />
					<Bloggers__Card />
					<Bloggers__Card />
					<Bloggers__Card />
					<Bloggers__Card />
					<Bloggers__Card />
				</div>
			</div>
		)
	}
}



export default hot( module )( Bloggers )

// import './bloggers.scss';