import React from 'react';
import classNames from 'classnames';
 

class Button extends React.Component {
	render() {
		const { className, children } = this.props;

		return (
			<div
				className={ classNames( 'button', className ) }
			>
				{ children }
			</div>
		)
	}
}

export default( Button );

import './button.scss';
