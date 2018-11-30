import React from 'react';

const SVG = ({icon, onClick, className}) => (
	<svg
		className={className}
		onClick={onClick? onClick : null}
	>
		<use xlinkHref={icon} />
	</svg>
)

export default SVG;
