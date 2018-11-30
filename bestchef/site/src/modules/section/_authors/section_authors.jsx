import React from 'react';
import classNames from 'classnames';

import author_1 from '../../../assets/img/authors/author-1.jpg';
import author_2 from '../../../assets/img/authors/author-2.jpg';

class Section_Authors extends React.Component {
	render() {

		return(
			<div className="section section_authors">
				<div className="section__title section__title_authors">Об авторах</div>
				<div className="container container_authors">
					<div className="block block_authors">
						<div className="block__header block__header_authors"
							style={{
								backgroundImage: `url(${author_2})`
							}}
						></div>
						<div className="block__body block__body_authors">
							<div className="block__description block__description_authors">
									<h2>Константин Ивлев</h2> Основатель компании IVLEV group, концепт-шеф «Капитал бизнес групп», бренд-шеф Deli By Shell. С 2008 года основатель и президент Федерации профессиональных поваров и кондитеров России.<br /><br />Является основателем кулинарного направления «Новая русская кухня». Член International Gastronomic Association Chaine des Rotisseurs, автор кулинарных книг «Моя философия кухни», «Кухня настоящих мужчин», «Россия готовит дома», «Готовим на раз, два, три» и серии книг «Уроки шеф-повара».<br /><br />Ведущий телепередач «Футбол со вкусом» на канале «Динамо-ТВ», программ «На ножах» и «Адская кухня» на канале «Пятница», программ «Вкус по карману» и «Моя-твоя еда» на канале «Кухня ТВ».<br /><br />Константин является колумнистом на радио «Серебряный дождь» (передача «Среда вкуса» с Константином Ивлевым). Преподаватель международной бизнес-школы управления в индустрии сервиса SWISSAM в Санкт-Петербурге , амбассадор Bruichladdich (односолодовые шотландские виски), лицо компании TEFAL, фабрики кухонной мебели LORENA, сети кафе  Deli By SHELL и специй ИНДАНА.
							</div>
						</div>
					</div>
					<div className="block block_authors">
						<div className="block__header block__header_authors"
							style={{
								backgroundImage: `url(${author_1})`
							}}
						></div>
						<div className="block__body block__body_authors">
							<div className="block__description block__description_authors">
								<h2>Олег Назаров</h2> Ведущий российский ресторанный критик и пиарщик, президент Независимой ассоциации ньюсмейкеров России, глава агентства «Назаров и Партнер.ши», автор свыше 500 pr-акций в ресторанах от Мурманска до Владивостока, создатель 12 кулинарных рекордов, вошедших в Книгу рекордов Гиннесса и Книгу рекордов России.РФ, автор 9 книг по ресторанному бизнесу, в том числе бестселлеров «Как раскрутить ресторан», «Как воруют в ресторане», «Самые вкусные блюда страны».
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default(Section_Authors);