/* React */
import React from 'react';
import ReactDOM from 'react-dom';

// pages
import Page from 'pages/page/page.jsx';


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
				<Page />
			</React.Fragment>
		)
	}
}

export default App;
