import React from 'react';
import classNames from 'classnames'; 

import header__img_1 from '../../../assets/img/gallery/33.jpg';
import header__img_2 from '../../../assets/img/gallery/4.jpg';

import {ModalContext} from 'src/js/context/modal';
import Form from 'blocks/form/form.jsx';

class Section_Packages extends React.Component {
	render() {
		const form = <Form />
		return(
			<ModalContext.Consumer>
				{({open}) =>
					<div className="section section_packages">
						<div className="section__title section__title_packages">Форматы участия</div>
						<div className="container container_packages">
							<div className="block block_packages">
								<div className="block__header block__header_packages">
									<img className="img img_packages" src={header__img_1} />
								</div>
								<div className="block__body block__body_packages">
									<div className="block__title block__title_packages">&laquo;Семинар&raquo;</div>
									<div className="block__description block__description_packages">
											4 мастер-класса от Константина Ивлева<br />Дегустации от партнёров семинара<br />Кофе-брейки<br />Фотосессия с ведущими семинара<br />Корпоративная скидка 15% для трёх и более участников*<br />Скидка 10% постоянным участникам семинаров Олега Назарова<br /><br /><i>*Скидка 15% действует до 20.11.2018<br />**Скидки не суммируются</i>
										<div className="block__price block__price_packages">Стоимость: 20 000 &#8381;</div>
									</div>
								</div>
								<div className="block__footer block__footer_packages">
									<a
										className="button block__button block__button_packages"
										onClick={() => open(form, '')}
									>
										Принять участие
									</a>
								</div>
							</div>
							<div className="block block_packages">
								<div className="block__header block__header_packages">
									<img className="img img_packages" src={header__img_2} />
								</div>
								<div className="block__body block__body_packages">
									<div className="block__title block__title_packages">&laquo;Бизнес-экскурсия&raquo;</div>
									<div className="block__description block__description_packages">
										Вместе с авторами семинара Вы посетите два новых проекта Константина Ивлева -  ресторан “Сирень” и Drinks&Dinners.<br/><br/>Константин лично расскажет о своих проектах, проведет экскурсию на кухню, ответит на все наши вопросы и, конечно, приготовит дегустационный ужин для участников семинара.<br /><br /><i>*Только для участников семинара</i><br /><i>**На бизнес-экскурсии скидки не распространяются</i>
										<div className="block__price block__price_packages">Стоимость: 7 000 &#8381;</div>
									</div>
								</div>
								<div className="block__footer block__footer_packages">
									<a
										className="button block__button block__button_packages"
										onClick={() => open(form, '')}
									>
										Принять участие
									</a>
								</div>
							</div>
						</div>
					</div>
				}
			</ModalContext.Consumer>
		)
	}
}

export default(Section_Packages);
