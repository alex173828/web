import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';


// import components

class Bloggers__Card extends React.Component {
	render() {

		return (
			<div className="card bloggers__card">
				<img src="#" className="card__img" alt="" />
				<div className="card__title">Name</div>
				<div className="card__description">
					Музыкальный канал с уникальным контентом. Это DJ-сеты, сопровождаемые врезками.
				</div>
				<div className="widget card__widget">
					<svg to="youtube.com" className="widget__icon widget__icon_card">
						<use xlinkHref="#youtube-symbol" />
					</svg>
					<div className="widget__title widget__title_card">320 000 +</div>
					<div className="widget__description widget__description_card">подписчиков</div>
				</div>
			</div>
		)
	}
}


export default hot( module )( Bloggers__Card )

// import './bloggers__card.scss';