import React from 'react';
import classNames from 'classnames'; 

class Section_Map extends React.Component {
	render() {

		return(
			<div className="section section_map">
				<div className="section__title section__title_map">Схема проезда</div>
				<div className="container container_map">
					<iframe className="container__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac8c6e32937fb9982a0bb4413f1c1a9590bed83423a457a67f3e214179ed8b888&amp;source=constructor" frameBorder="0"></iframe>
				</div>
			</div>
		)
	}
}

export default(Section_Map);