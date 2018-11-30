import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

// import components
import Header__Logo from 'client_modules/header/__logo/header__logo.jsx';
// import Navigation from 'client_blocks/navigation/navigation.jsx';
// import Modal from 'client_modules/modal/modal.jsx';

class Header extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isModalOpen: false,
			isMenuOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);

		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	openModal() {
		this.setState({ isModalOpen: true });
	}

	closeModal() {
		this.setState({ isModalOpen: false });
	}

	openMenu() {
		this.setState({ isMenuOpen: true })
	}

	closeMenu() {
		this.setState({ isMenuOpen: false })
	}

	render() {
		const modal =
		<div id="modal" className={this.state.isModalOpen ? "modal modal_active" : "modal"}>
			<svg
				onClick={this.closeModal}
				className="modal__button modal__button_close">
					<use xlinkHref="#cancel" />
			</svg>
			<div className="form">
				<div className="form__header">Мы свяжемся с Вами и ответим на все вопросы, если Вы заполните форму ниже:</div>
				<div className="form__body">
					<input type="text" className="form__input_modal" placeholder="Ваше имя" />
					<input type="text" className="form__input_modal" placeholder="Ваш E-Mail" />
					<input type="text" className="form__input_modal" placeholder="Ваш телефон" />
					<input type="text" className="form__input_modal" placeholder="Сообщение" />
				</div>
				<div className="form__footer">
					<a href="#" className="modal__link_upload">Прикрепить файл</a>
					<button className="button modal__button_submit">Отправить заявку</button>
				</div>
			</div>
		</div>

		const navigation__list =
			<div className={this.state.isMenuOpen ? "list navigation__list navigation__list_active" : "list navigation__list"}>
				<svg
					onClick={this.closeMenu}
					className="button button_close navigation__button_close">
						<use xlinkHref="#cancel" />
				</svg>
				<a href="#about" className="list__item list__item_navigation">Наше агенство</a>
				{/* <a href="#bloggers" className="list__item list__item_navigation">Наши блогеры <sup className="numberOfBloggers">8</sup></a> */}
				{/* <a href="#clients" className="list__item list__item_navigation">Наши клиенты</a> */}
				<a href="#footer" className="list__item list__item_navigation">Контакты</a>
			</div>

		return (
			<React.Fragment>
				<div
					id="header"
					className="header"
				>
					<Header__Logo />

					<div className="navigation">
						<svg
							onClick={this.openMenu}
							className="button navigation__button">
								<use xlinkHref="#menu" />
						</svg>
						{navigation__list}
					</div>

				<div
					onClick={this.openModal}
					className="button button_modal button_hidden"
				>
					<div className="button__label">Обратная связь</div>
						<svg className="button__icon button__icon_modal">
							<use xlinkHref="#plus-button" />
						</svg>
				</div>
				<div
					onClick={this.openModal}
					className="button button_modal button_fixed"
				>
					<div className="button__label">Обратная связь</div>
						<svg className="button__icon button__icon_modal">
							<use xlinkHref="#plus-button" />
						</svg>
				</div>

				{modal}
				</div>
			</React.Fragment>
		)
	}
}



export default hot( module )( Header )

// import './header.scss';
