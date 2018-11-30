import React, { Component } from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

// import components


class Clients extends React.Component {
	render() {

	// import images
    function importAll(r) {
      let clients__logotypes = {};
      r.keys().map((item, index) => { clients__logotypes[item.replace('./', '')] = r(item); });
      return clients__logotypes;
    }

    const clients__logotypes = importAll(require.context('../../assets/img/logo', false, /\.(png|jpe?g|svg)$/));

		return (
			<div id="clients" className="clients">
				<div className="title clients__title">Наши клиенты</div>
				<div className="clients__section">
					<img 
						className="clients__logo"
						src={clients__logotypes['1.png']} 
					/>
					<img 
						className="clients__logo"
						src={clients__logotypes['2.png']} 
					/>
					<img 
						className="clients__logo"
						src={clients__logotypes['3.png']} 
					/>
					<img 
						className="clients__logo"
						src={clients__logotypes['4.png']} 
					/>
					<img 
						className="clients__logo"
						src={clients__logotypes['5.png']} 
					/>
					<img 
						className="clients__logo"
						src={clients__logotypes['6.png']} 
					/>
					<img 
						className="clients__logo"
						src={clients__logotypes['7.png']} 
					/>
					<img 
						className="clients__logo"
						src={clients__logotypes['8.png']} 
					/>
					<img 
						className="clients__logo"
						src={clients__logotypes['9.png']} 
					/>
					<img 
						className="clients__logo"
						src={clients__logotypes['10.png']} 
					/>


				</div>
			</div>
		)
	}
}



export default hot( module )( Clients )

// import './clients.scss';