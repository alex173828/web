import React from 'react';

const Slide = props => (
	<div className="slick-slider__slide main__slide">
		<div className="title slick-slider__title">
			{props.title}
		</div>

		<div className="description slick-slider__description">
			{props.description}
		</div>

		<div
			className="link link_modal link_color_white"
			onClick={props.togglerModal}
		>
			Связаться с организаторами
		</div>

		<a
			href={props.link}
			className="button"
		>
			Выбрать билет
		</a>
	</div>
)

export default Slide;
