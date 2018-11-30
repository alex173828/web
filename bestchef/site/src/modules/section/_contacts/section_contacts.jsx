import React from 'react';
import classNames from 'classnames'; 

class Section_Contacts extends React.Component {
	render() {

		return(
			<div className="section section_contacts">
				<div className="section__title section__title_contacts">Когда и где?</div>
				<div className="container container_contacts">
					<div className="block block_contacts">
						<svg className="icon icon_contacts">
							<use xlinkHref="#placeholder" />
						</svg>
						<div className="block__description block__description_contacts">
							Москва<br />Парк &laquo;Сокольники&raquo;<br />Песочная аллея, д.1
						</div>
					</div>
					<div className="block block_contacts">
						<svg className="icon icon_contacts">
							<use xlinkHref="#calendar" />
						</svg>
						<div className="block__description block__description_contacts">
							4-5 декабря<br />с 9:30 до 20:00
						</div>
					</div>
					<div className="block block_contacts">
						<svg className="icon icon_contacts">
							<use xlinkHref="#telephone" />
						</svg>
						<div className="block__description block__description_contacts">
							<a className="block__link block__link_contacts" href="tel:+79629340971">+7 (962) 934 09-71</a><br /><a href="mailto:Bestchef2018.ru@gmail.com?subject=Вопрос по мероприятию Открытая кухня" className="block__link block__link_contacts">Bestchef2018.ru@gmail.com</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default(Section_Contacts);