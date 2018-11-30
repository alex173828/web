import React from 'react';
import classNames from 'classnames';

import partner_1 from '../../../assets/img/partners/1.jpg';
import partner_2 from '../../../assets/img/partners/2.jpg';
import partner_3 from '../../../assets/img/partners/3.jpg';
import partner_4 from '../../../assets/img/partners/4.jpg';
import partner_5 from '../../../assets/img/partners/5.png';
import partner_6 from '../../../assets/img/partners/6.jpg';
import partner_7 from '../../../assets/img/partners/7.jpg';

class Section_Partners extends React.Component {
	render() {
		return(
			<div className="section section_partners">
				<div className="section__title section__title_partners">Партнёры мероприятия</div>
				<div className="container container_partners">
					<img className="img img_partners" src={partner_3} alt="Ресторановед" />
					<img className="img img_partners" src={partner_7} alt="Альфа-Бизнес" />
					<img className="img img_partners" src={partner_1} alt="Федерация рестораторов и отельеров" />
					<img className="img img_partners" src={partner_4} alt="Chef Works" />
					<img className="img img_partners" src={partner_2} alt="Apach lab" />
					<img className="img img_partners" src={partner_6} alt="Craby.ru" />
					<img className="img img_partners" src={partner_5} alt="Лемма" />
				</div>
			</div>
		)
	}
}

export default(Section_Partners);
