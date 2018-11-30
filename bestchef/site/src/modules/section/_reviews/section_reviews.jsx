import React from 'react';
import classNames from 'classnames';

class Section_Reviews extends React.Component {
	render() {

		return(
			<div className="section section_reviews">
				<div className="section__title section__title_reviews">Отзывы участников семинара</div>
				<div className="container container_reviews">
					<iframe className="block block_reviews" src="//www.youtube.com/embed/dFKO2huMsug?autoplay=0&amp;loop=0&amp;showinfo=0&amp;theme=dark&amp;color=red&amp;controls=1&amp;modestbranding=0&amp;start=0&amp;fs=1&amp;iv_load_policy=1&amp;wmode=transparent&amp;rel=1" frameBorder="0" allowFullScreen=""></iframe>
				</div>
			</div>
		)
	}
}

export default(Section_Reviews);