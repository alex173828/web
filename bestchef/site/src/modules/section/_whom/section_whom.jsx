import React from 'react';
import classNames from 'classnames';

class Section_Whom extends React.Component {
	render() {

		return(
			<div className="section section_whom">
				<div className="section__title section__title_whom">Для кого?</div>
				<div className="container container_whom">
					<div className="block block_whom">
						<svg className="icon icon_whom">
							<use xlinkHref="#businessman-with-tie" />
						</svg>
						<div className="block__description block__description_whom">Для владельцев <br /> бизнеса</div>
					</div>
					<div className="block block_whom">
						<svg className="icon icon_whom">
							<use xlinkHref="#chef" />
						</svg>
						<div className="block__description block__description_whom">Для шефов, которые <br /> хотят стать владельцами <br /> бизнеса ;)</div>
					</div>
					<div className="block block_whom">
						<svg className="icon icon_whom">
							<use xlinkHref="#manager-avatar" />
						</svg>
						<div className="block__description block__description_whom">Для управляющих <br /> ресторанами</div>
					</div>
					<div className="block block_whom">
						<svg className="icon icon_whom">
							<use xlinkHref="#woman" />
						</svg>
						<div className="block__description block__description_whom">Для PR-директоров <br /> и маркетологов</div>
					</div>
				</div>
			</div>
		)
	}
}

export default(Section_Whom);