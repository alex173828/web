import React from 'react';
import classNames from 'classnames';

import Section_Purchase from 'client_modules/section/_purchase/section_purchase.jsx';
import Section_Packages from 'client_modules/section/_packages/section_packages.jsx';
import Section_Contacts from 'client_modules/section/_contacts/section_contacts.jsx';
import Section_Partners from 'client_modules/section/_partners/section_partners.jsx';
import Section_Features from 'client_modules/section/_features/section_features.jsx';
import Section_Gallery from 'client_modules/section/_gallery/section_gallery.jsx';
import Section_Reviews from 'client_modules/section/_reviews/section_reviews.jsx';
import Section_Program from 'client_modules/section/_program/section_program.jsx';
import Section_Authors from 'client_modules/section/_authors/section_authors.jsx';
import Section_Footer from 'client_modules/section/_footer/section_footer.jsx';
import Section_Whom from 'client_modules/section/_whom/section_whom.jsx';
import Section_Map from 'client_modules/section/_map/section_map.jsx';
import Section_Main from 'client_modules/section/_main/section_main.jsx';
import Modal from 'blocks/modal/modal.jsx';

import {ModalContext} from 'src/js/context/modal';

class Page extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			classNameContent: '',
			value: null,

			close: ::this.close,
			open: ::this.open,
			opened: false
		}
	}

	open(value, classNameContent) {
		this.setState({
			classNameContent,
			opened: true,
			value
		});
	}

	close() {
		this.setState({
			value: null,
			opened: false
		});
	}

	render() {
		return (
			<ModalContext.Provider value={this.state}>
				<div className="page">
					<Modal />

					<Section_Main />
					<Section_Gallery />
					<Section_Purchase />
{/*					<Section_Whom />
					<Section_Authors />
					<Section_Features />
					<Section_Program />
					<Section_Reviews />
					<Section_Partners />
					<Section_Contacts />
					<Section_Map />
					<Section_Footer />*/}
				</div>
			</ModalContext.Provider>
		)
	}
}

export default Page;
