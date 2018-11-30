import React, { Component } from 'react';
import classNames from 'classnames';
 

class Page__Slide extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<section className="page__slide transition-item">
				{ children }
			</section>
		)
	}
}



export default( Page__Slide )

import './_page__slide.scss';