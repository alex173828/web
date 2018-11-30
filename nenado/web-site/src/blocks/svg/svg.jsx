import React from 'react';
import classNames from 'classnames';

const SVG = props => (
	<svg
		className={classNames(props.className)}
		onClick={props.onClickHandler? props.onClickHandler : () => null}
	>
		<use xlinkHref={props.svg} />
	</svg>
)

export default SVG;
