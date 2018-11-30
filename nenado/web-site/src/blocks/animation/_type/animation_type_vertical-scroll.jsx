import React from 'react';
import classNames from 'classnames';

/**
 * @direction
 * 	true - from
 * 	false - to
 * 	null - is nothing happend
 *
 * @type
 * 	true - is next
 * 	false - is prev
 *	null - is nothing happend
 */

class Animation extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			animatePreparing: false,
			animating: false,

			direction: null,
			type: null
		};
	}

	componentDidMount() {
		this.startAnimation(this.state.direction);
		if (this.node) this.node.addEventListener("transitionend", ::this.onTransitionEnd);
	}

	componentWillUnmount() {
		if (this.node) this.node.removeEventListener("transitionend", ::this.onTransitionEnd);
	}

	componentWillReceiveProps(newProps) {
		const {
			direction,
			type
		} = newProps;

		if (direction != null && type != null) {
			this.setState({
				direction,
				type
			});
			this.startAnimation(direction);
		}
	}

	startAnimation(direction) {
		// const noAnimate = direction == this.state.direction;
		//
		// if (this.state.animatePreparing) {
		// 	this._animationCallback = this.props.animationCallback;
		// 	return this.setState({
		// 		animatePreparing: false
		// 	});
		// }

		this._animationCallback = ::this.postPrepareAnimation;
		this._postPrepareTimeout = setTimeout(::this.postPrepareAnimation, 300);

		this.setState({
			animating: true,
			animatePreparing: true
		});
	}

	postPrepareAnimation() {
		clearTimeout(this._postPrepareTimeout);
		this._animationCallback = null;

		this.setState(
			{animatePreparing: false},
			() => (this._animationCallback = this.props.animationCallback)
		);
	}

	onTransitionEnd(e) {
		if (e.propertyName !== "transform") return;

		const callback = this._animationCallback;
		delete this._animationCallback;

		if (callback) setTimeout(callback, 0);
		else this.setState({animating: false});
	}

	render() {
		const {
			props: {
				children,
				className
			},
			state: {
				animatePreparing,
				animating,

				direction,
				type
			}
		} = this;

		return (
			<div
				ref={node => this.node = node}
				className={classNames('animation_type_vertical-scroll', className, {
					prev: type != null && !type,
					next: type != null && type,

					from: direction != null && direction,
					to: direction != null && !direction,

					prepear: animatePreparing
				})}
			>
				{children}
			</div>
		);
	}
}

export default Animation;
