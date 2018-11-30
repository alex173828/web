import React from 'react';
import {Link} from 'react-router-dom';
import {Motion, spring} from 'react-motion';

const show = value => value;
const hide = value => 1 - value;


class Logo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActiveWhite: true,
			needChange: false,
		}
	}

	render() {
		const blackParams = {
			opacity: this.props.isWhiteActive? 0 : 1,
			position: this.props.isWhiteActive? 'absolute' : 'inherit'
		};
		const whiteParams = {
			opacity: !this.props.isWhiteActive? 0 : 1,
			position: !this.props.isWhiteActive? 'absolute' : 'inherit'
		};

		return (
			<Link to="/" className="logo">
				<div
					style={{
						...blackParams
					}}
					className="logo__img"
				></div>

				<div
					style={{
						...whiteParams
					}}
					className="logo__img_white"
				></div>
			</Link>
		)
	}

}

export default Logo;
