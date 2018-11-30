import React from 'react';

const Slide = ({img, name, role}) => (
	<div className="teammate">
		<div
			className="teammate__img"
			style={{
				backgroundImage: `url(${img})`
			}}
		></div>
		<div className="teammate__name">
			{name}
		</div>
		<div className="teammate__role">
			{role}
		</div>
	</div>
);

export default Slide;
