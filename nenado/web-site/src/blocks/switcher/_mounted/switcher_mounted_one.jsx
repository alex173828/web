import React from 'react';
import {withLastLocation} from 'react-router-last-location';

import AnimationTypeVerticalScroll from 'blocks/animation/_type/animation_type_vertical-scroll.jsx';

class Switcher extends React.Component {
	constructor(props) {
		super(props);

		this._navRoutes = ['/', '/services', '/portfolio', '/contacts'];
		this._modalRoutes = ['/test', '/feedback'];

		this.state = {
			animationCallback: null,

			direction: null,
			type: null,

			curChild: props.children,
			curUniqId: props.uniqId,

			prevUniqId: null,
			prevChild: null,

			Animation: AnimationTypeVerticalScroll
		};
	}

	componentWillReceiveProps(newProps) {
		const prevUniqId = this.props.uniqKey || this.props.children.type;
		const uniqId = newProps.uniqKey || newProps.children.type;

		const lastPathname = newProps.lastLocation? newProps.lastLocation.pathname : null;
		const pathname = newProps.location.pathname;

		const type = this._getIndex(pathname) > this._getIndex(lastPathname);

		if (prevUniqId !== uniqId)
			this.setState({
				direction: true,
				type,

				curChild: newProps.children,
				curUniqId: uniqId,

				prevChild: this.props.children,
				prevUniqId,

				animationCallback: ::this._swapChildren,
				Animation: AnimationTypeVerticalScroll
			});
	}

	componentDidUpdate(_, prevState) {
		if (this.state.Animation != prevState.Animation)
			this.forceUpdate();
	}

	_getIndex(value) {
		return this._navRoutes.indexOf(value);
	}

	_swapChildren() {
		this.setState({
			direction: false,

			prevChild: null,
			prevUniqId: null,

			animationCallback: null
		});
	};

	render() {
		const {
			state: {
				animationCallback,
				Animation,

				prevChild,
				curChild,

				direction,
				type
			}
		} = this;

		return (
			<Animation
				className="switcher"
				{...{
					animationCallback,
					direction,
					type
				}}
			>
				{prevChild || curChild}
			</Animation>
		);
	}
}

export default withLastLocation(Switcher);
