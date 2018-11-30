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
			animating: false,
			type: props.type
		};
	}

	componentDidMount() {
		setTimeout(() => this.startAnimation(), 10);
		this._animationCallback = this.props.animationCallback;
		if (this.node) this.node.addEventListener('transitionend', ::this.onTransitionEnd);
	}

	componentWillUnmount() {
		if (this.node) this.node.removeEventListener('transitionend', ::this.onTransitionEnd);
	}

	startAnimation() {
		this.setState({
			animating: true
		});
	}

	onTransitionEnd(e) {
		if (!e.target.classList.contains('animation_type_vertical-drop') || e.propertyName !== "transform") return;

		const callback = this._animationCallback;
		delete this._animationCallback;

		if (callback) setTimeout(callback, 0);
	}

	render() {
		const {
			props: {
				children,
				className
			},
			state: {
				animating,
				type
			}
		} = this;

		return (
			<div
				ref={node => this.node = node}
				className={classNames(className, {
					'animation_type_vertical-drop': true,
					prev: type != null && !type,
					next: type != null && type,
					to: animating
				})}
			>
				{children}
			</div>
		);
	}
}

export default Animation;
