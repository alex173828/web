import React from 'react';
import classNames from 'classnames';

import img_main1 from '../../../assets/img/bg/nazarov.png';
import img_main2 from '../../../assets/img/bg/ivlev.jpg';

class Section_Main extends React.Component {
	render() {
		return(
			<div className="section section_main">
				<div className="section__header">
					<div className="logo">
						<svg className="icon icon_logo">
							<use xlinkHref="#logo" />
						</svg>
						<div className="logo__label"><span>«Открытая</span> кухня 2.0»</div>
					</div>
				</div>
				<div className="container container_main">
					<div className="section__title section__title_main">
						Образовательно-интерактивный<br />мастер-класс
					</div>
					<div className="block block_main">
						<div className="img img_main"
							style={{
								backgroundImage: `url(${img_main1})`
							}}
						></div>
						<div className="block__description block__description_main">
							<div>От самого знаменитого<br />Российского шеф-повара<br /><span>Константина Ивлева</span></div> 
							<div>И самого известного<br />ресторанного критика нашей страны<br /><span>Олега Назарова</span></div>
							<div>4-5 декабря<br />2018 года</div>
						</div>
						<div className="img img_main"
							style={{
								backgroundImage: `url(${img_main2})`
							}}
						></div>
					</div>
					<div className="block block_main">
						<a className="block__button block__button_main">Хочу участвовать</a>
					</div>
				</div>
			</div>
		)
	}
}

export default(Section_Main);