import React from 'react';
import classNames from 'classnames'; 

class Section_Footer extends React.Component {
	render() {

		return(
			<div className="section section_footer">
				<div className="container container_footer">
					<div className="block block_footer">
						«Открытая кухня 2.0»<br />&copy; Все права защищены
						<a href="./politika.html" className="block__link block__link_confidentional">Политика конфиденциальности</a>
					</div>
				</div>
			</div>
		)
	}
}

export default(Section_Footer);