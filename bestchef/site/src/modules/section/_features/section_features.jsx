import React from 'react';
import classNames from 'classnames'; 

class Section_Features extends React.Component {
	render() {

		return(
			<div className="section section_features">
				<div className="section__title section__title_features">В ХОДЕ <span>ДВУХДНЕВНОГО</span> ПОГРУЖЕНИЯ В ТЕМУ <span>ВЫ ПОЛУЧИТЕ:</span></div>
				<div className="container container_features">
					<div className="block block_features">
						<div className="block__title block__title_features"><span>ЭФФЕКТИВНЫЙ</span><br />АЛГОРИТМ</div>
						<div className="block__description block__description_features">создания успешной кухни ресторана в условиях 2017-2018 гг.</div>
					</div>
					<div className="block block_features">
						<div className="block__title block__title_features"><span>ЧЕТКИЕ</span><br />ИНСТРУКЦИИ</div>
						<div className="block__description block__description_features">по оптимизации управления кухней</div>
					</div>
					<div className="block block_features">
						<div className="block__title block__title_features"><span>РАБОТАЮЩИЕ</span><br />МЕХАНИЗМЫ</div>
						<div className="block__description block__description_features">предотвращения хищений на кухне</div>
					</div>
					<div className="block block_features">
						<div className="block__title block__title_features"><span>УМЕНИЕ</span><br />ГОТОВИТЬ</div>
						<div className="block__description block__description_features">самые хитовые блюда ресторанов в 2018 году</div>
					</div>
					<div className="block block_features">
						<div className="block__title block__title_features"><span>КОНКРЕТНЫЕ</span><br />ПРЕДЛОЖЕНИЯ</div>
						<div className="block__description block__description_features">по взрывной раскрутке кухни своих заведений</div>
					</div>
					<div className="block block_features">
						<div className="block__title block__title_features"><span>НАВЫКИ</span><br />ЭФФЕКТИВНОЙ РАБОТЫ</div>
						<div className="block__description block__description_features">по продвижению шеф-повара в социальных сетях и СМИ</div>
					</div>
					<div className="block block_features">
						<div className="block__title block__title_features"><span>ОТВЕТЫ</span><br />НА ВОПРОСЫ</div>
						<div className="block__description block__description_features">по управлению и продвижению кухни своих ресторанов</div>
					</div>
					<div className="block block_features">
						<div className="block__title block__title_features"><span>ВОЗМОЖНОСТЬ</span><br />УВИДЕТЬ</div>
						<div className="block__description block__description_features">на практике работу успешных столичных ресторанов, сделавших ставку именно на кухню</div>
					</div>
				</div>
			</div>
		)
	}
}

export default(Section_Features);