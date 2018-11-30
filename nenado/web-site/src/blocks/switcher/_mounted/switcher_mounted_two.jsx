import React from 'react';
import {withLastLocation} from 'react-router-last-location';

import AnimationTypeVerticalDrop from 'blocks/animation/_type/animation_type_vertical-drop.jsx';


class Switcher extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			animationCallback: null,

			direction: null,
			type: null,

			curChild: props.children,
			curUniqId: props.uniqId,

			prevUniqId: null,
			prevChild: null,

			Animation: AnimationTypeVerticalDrop
		};
	}

	componentDidUpdate(prevProps, prevState) {
		const prevUniqId = prevProps.uniqKey || prevProps.children.type;
		const uniqId = this.props.uniqKey || this.props.children.type;

		const lastPathname = this.props.lastLocation? this.props.lastLocation.pathname : null;
		const pathname = this.props.location.pathname;

		const type = this._getIndex(pathname) > this._getIndex(lastPathname);

		if (prevUniqId !== uniqId) {
			this.setState({
				direction: true,
				type,

				curChild: this.props.children,
				curUniqId: uniqId,

				prevChild: prevProps.children,
				prevUniqId,

				animationCallback: ::this._swapChildren,
				Animation: AnimationTypeVerticalDrop
			});
			this.props.turnOff();
		}
	}

	_getIndex(value) {
		return this.props.routes.indexOf(value);
	}

	_swapChildren() {
		this.setState({
			prevChild: null,
			prevUniqId: null,

			animationCallback: null
		});

		this.props.turnOn()
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
			},

			props: {
				turnOff,
				turnOn
			}
		} = this;

		return (
			<React.Fragment>
				{prevChild || curChild}

				{
					prevChild
						&&
					(
						<Animation
							className="switcher"
							{...{
								animationCallback,
								type
							}}
						>
							{curChild}
						</Animation>
					)
				}
			</React.Fragment>
		);
	}
}

export default withLastLocation(Switcher);
