import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

// import components

class Modal extends React.Component {

	render() {

		return (
			<div id="modal" className="modal">
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
		)
	}
}



export default hot( module )( Modal )

// import './Modal.scss';