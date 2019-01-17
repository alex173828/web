import React from 'react';
import { withRouter } from 'react-router-dom';

/**
 * props
 * 	mountPoint - DOM element
 */
class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
            <React.Fragment>
            </React.Fragment>
		)
	}
}

export default withRouter(App);
