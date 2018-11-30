import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';


class Footer extends React.Component {
	render() {

		return (
			<div id="footer" className="footer">
				<div className="logo footer__logo">
					<div className="logo__label logo__label_black">outpace</div>
				</div>
				<div className="footer__section">
					<div className="footer__title">Проекты:</div>
					<div className="list footer__list">
						<div className="list__item list__item_footer">hello@outpace.agency</div>
					</div>
				</div>
				<div className="footer__section">
					<div className="footer__title">Телефон:</div>
					<div className="list footer__list">
						<div className="list__item list__item_footer">+7 (953) 264-56-98</div>
					</div>
				</div>
				<div className="footer__section">
					<div className="footer__title">Подписывайтесь на нас:</div>
					<div className="list socials__list">
						<svg className="list__item list__item_socials">
							<use xlinkHref="#facebook-logo" />
						</svg>
						<svg className="list__item list__item_socials">
							<use xlinkHref="#vk-social-network-logo" />
						</svg>
						<svg className="list__item list__item_socials">
							<use xlinkHref="#telegram" />
						</svg>
					</div>
				</div>
			</div>
		)
	}
}



export default hot( module )( Footer )

// import './footer.scss';