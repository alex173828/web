import React from 'react';
import {Route} from 'react-router-dom';

import Communications from 'client_modules/communications/communications.jsx';
import Experience from 'client_modules/experience/experience.jsx';
import Services from 'client_modules/services/services.jsx';
import Sidebar from 'client_modules/sidebar/sidebar.jsx';
import Header from 'client_modules/header/header.jsx';
import About from 'client_modules/about/about.jsx';
import Main from 'client_modules/main/main.jsx';
import Team from 'client_modules/team/team.jsx';

import Modal from 'blocks/modal/modal.jsx';

import {AnimationContext} from 'src/js/contexts/animation/animation';
import {ModalContext} from 'src/js/contexts/modal/modal';

import Switcher from 'blocks/switcher/switcher.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.className = 'switch-wrapper';

        this._routes = ['/', '/about', '/experience', '/services', '/team', '/communications'];
        this.transitionGraph = {
            '/': {
                from: null,
                to: '/about'
            },

            '/about': {
                from: '/',
                to: '/experience'
            },

            '/experience': {
                from: '/about',
                to: '/services'
            },

            '/services': {
                from: '/experience',
                to: '/team'
            },

            '/team': {
                from: '/services',
                to: '/communications'
            },

            '/communications': {
                from: '/team',
                to: null
            }
        }

        this.state = {
            classNameContent: '',
            close: ::this.close,
			open: ::this.open,
			opened: false,

            turnOff: ::this.turnOff,
            turnOn: ::this.turnOn,
            animation: true
        };
    }

    // ModalContext
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

    // AnimationContext
    turnOff() {
        this.setState({
            animation: false
        })
    }

    turnOn() {
        this.setState({
            animation: true
        })
    }

	render() {
        const {
            transitionGraph,
            className
        } = this;

		return (
            <ModalContext.Provider value={this.state}>
                <Modal/>

                <Header />
                <Sidebar />

                <AnimationContext.Provider value={this.state}>
                    <Switcher
                        {...{
                            routes: this._routes,
                            transitionGraph,
                            className
                        }}
                    >
                        <Route
                            exact path="/communications"
                            component={Communications}
                        />
                        <Route
                            exact path="/experience"
                            component={Experience}
                         />
                        <Route
                            exact path="/services"
                            component={Services}
                        />
                        <Route
                            exact path="/about"
                            component={About}
                         />
                        <Route
                            exact path="/team"
                            component={Team}
                         />
                        <Route
                            exact path="/"
                            component={Main}
                        />
                    </Switcher>
                </AnimationContext.Provider>
            </ModalContext.Provider>
		)
	}
}

export default App;

// import './style.scss';
