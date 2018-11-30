/* React */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/* Route */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* Hot Reload */
import { hot } from 'react-hot-loader';
/* Components */
// modules
import Header from 'client_modules/header/header.jsx';
import Main from 'client_modules/main/main.jsx';
import About from 'client_modules/about/about.jsx';
import Bloggers from 'client_modules/bloggers/bloggers.jsx';
import Clients from 'client_modules/clients/clients.jsx';
import Footer from 'client_modules/footer/footer.jsx';
// elements



class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (

			<React.Fragment>
				<Header />
				<Main />
				<About />
				{/* <Bloggers /> */}
				{/* <Clients /> */}
				<Footer />
			</React.Fragment>
		)
	}
}

export default hot( module )( App )

// import './style.scss';
