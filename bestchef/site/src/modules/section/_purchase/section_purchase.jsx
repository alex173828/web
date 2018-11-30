import React from 'react';

class Purchase extends React.Component {
	constructor(props) {
		super(props);

		this._node = null;
	}

	componentDidMount() {
		const script = document.createElement("script");

		script.src = 'https://timepad.ru/js/tpwf/loader/min/loader.js';
		// script.innerHTML = "text/javascript";
		script.type = 'text/javascript';
		script.async = true;

		script.setAttribute('charset', 'UTF-8');
		script.setAttribute('data-timepad-widget-v2', 'event_register');
		script.setAttribute('data-timepad-customized', '34069');
		script.setAttribute('data-twf2s-event--id', '850332');

		this._node.appendChild(script);
	}

	render() {
		return (
			<div
				className="section section_purchase"
				ref={node => this._node = node}
			></div>
		)
	}
}

export default Purchase;
