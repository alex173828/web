import React from 'react';
import {withRouter} from 'react-router-dom';

class TriggerScroll extends React.Component {
	constructor(props) {
		super(props);

		this.handlerOnScroll = ::this._handlerOnScroll;
		this._scrollTimer = null;
        this._dom = null;
	}

	// Handlers
	_createDomRef(node) {
		this._dom = node;
	}

	_handlerOnScroll({wheelDeltaY}) {
		const {
			_dom: {
				firstChild: {
					clientHeight,
					scrollHeight,
					scrollTop
				}
			},
			props: {
				transitionGraph,
				location: {
					pathname
				},
				history
			}
		} = this;

		const canScrollTop = scrollHeight - clientHeight;

		if (scrollTop == 0 && wheelDeltaY > 50 && transitionGraph[pathname].from != null) {
			history.push(transitionGraph[pathname].from);
		} else if ((scrollTop == canScrollTop) && wheelDeltaY < -50 && transitionGraph[pathname].to != null) {
			history.push(transitionGraph[pathname].to);
		} else {
			this._dom.addEventListener('mousewheel', this.handlerOnScroll);
		}
	}

	// Lifecicle
	componentWillReceiveProps() {
		clearTimeout(this._scrollTimer);
		this._dom.removeEventListener('mousewheel', this.handlerOnScroll);
	}

	componentDidMount() {
		const {
			props: {
				transitionGraph,
				location: {
					pathname
				}
			}
		} = this;

		if (transitionGraph[pathname] != null)
			this._scrollTimer = setTimeout(() => this._dom.addEventListener('mousewheel', this.handlerOnScroll), 600);
	}

	componentDidUpdate() {
		const {
			props: {
				transitionGraph,
				location: {
					pathname
				}
			}
		} = this;

		if (transitionGraph[pathname] != null)
			this._scrollTimer = setTimeout(() => this._dom.addEventListener('mousewheel', this.handlerOnScroll), 600);
	}

	componentWillUnmount() {
		this._dom.removeEventListener('mousewheel', this.handlerOnScroll);
	}

	render() {
		const {
			props: {
				className,
				children
			}
		} = this;

		return (
			<div
				ref={::this._createDomRef}
				{...{className}}
			>
				{children}
			</div>
		)
	}
}

export default withRouter(TriggerScroll);
