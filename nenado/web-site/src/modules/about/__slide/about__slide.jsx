import React from 'react';
import classNames from 'classnames';

const Slide = ({amount, title, classNameAmount, classNameTitle}) => (
	<div className="statistics__container">
		<div className={classNames('statistics__number', classNameAmount)}>
			{amount}
		</div>

		<div className={classNames('statistics__text', classNameTitle)}>
			{title}
		</div>
	</div>
)

export default Slide;
