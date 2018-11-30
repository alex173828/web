import React from 'react';
import SVG from 'blocks/svg/svg.jsx';
import {ModalContext} from 'src/js/contexts/modal/modal';

class Modal extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {
			props: {
				value,
				closeModal,
				isModalOpen,
				classNameContent
			}
		} = this;

		return (
			<ModalContext.Consumer>
				{({opened, classNameContent, close, value}) => (
					<div className={`modal ${opened ? 'modal_active' : ''}`}>
						<div className={`modal__content ${classNameContent} ${opened ? 'modal__content_active' : ''}`}>
							<SVG
								svg="#close"
								className="icon icon_close"
								onClickHandler={close}
							/>
							{value}
						</div>
					</div>
				)}
			</ModalContext.Consumer>
		)
	}
}



export default Modal;

// import './modal.scss';
