import React from 'react';
import SVG from 'blocks/svg/svg.jsx';
import {ModalContext} from 'src/js/context/modal';

const Modal = () => (
	<ModalContext.Consumer>
		{({close, value, opened, classNameContent}) => (
			<div className={`modal ${opened ? 'modal_active' : ''}`}>
				<div className={`modal__content ${classNameContent} ${opened ? 'modal__content_active' : ''}`}>
					<SVG
						icon="#close"
						onClick={close}
						className="icon icon_close"
					/>
					<h2 className="modal__title">Заявка на участие</h2>
					{value}
				</div>
			</div>
		)}
	</ModalContext.Consumer>
)

export default Modal;
