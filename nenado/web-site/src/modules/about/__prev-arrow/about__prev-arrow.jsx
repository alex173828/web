import React from 'react';
import SVG from 'blocks/svg/svg.jsx';

const Arrow = props => (
	<SVG
		svg={'#next'}
		className="slick-slider__control slick-slider__control_direction_left"
		onClickHandler={props.onClick}
	/>
)

export default Arrow;
