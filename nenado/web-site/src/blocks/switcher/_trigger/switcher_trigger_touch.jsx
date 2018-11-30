import React from 'react';
import {withRouter} from 'react-router-dom';

class TriggerTouch extends React.Component {
	constructor(props) {
		super(props);

		this.handlerOnTouch = ::this._handlerOnTouch;
		this.onTouchStart = ::this._onTouchStart;
		this.onTouchEnd = ::this._onTouchEnd;

		this._touchTimer = null;
        this._dom = null;

		this._timeStartY = null;
		this._timeEndY = null;

		this._startY = null;
		this._endY = null;
	}

	// Handlers
	_createDomRef(node) {
		this._dom = node;
	}

	_addHandlerOnTouch() {
		if (!this._dom)
			return;
		this._dom.addEventListener('touchstart', this.onTouchStart);
		this._dom.addEventListener('touchend', this.onTouchEnd);
	}

	_removeHandlerOnTouch() {
		if (!this._dom)
			return;
		this._dom.removeEventListener('touchstart', this.onTouchStart);
		this._dom.removeEventListener('touchend', this.onTouchEnd);
	}

	_onTouchStart(event) {
		const touch = event.changedTouches[0];

		this._timeStartY = new Date().getTime();
		this._startY = touch.pageY;
	}

	_onTouchEnd(event) {
		const touch = event.changedTouches[0];

		this._timeEndY = new Date().getTime();
		this._endY = touch.pageY;

		this.handlerOnTouch();
	}

	_handlerOnTouch() {
		const {
			_timeStartY,
			_timeEndY,
			_startY,
			_endY,

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
		const wheelDeltaY = _endY - _startY;
		const deltaTime = _timeEndY - _timeStartY;

		if (deltaTime > 300) {
			return false;
		}

		if (scrollTop == 0 && wheelDeltaY > 200 && transitionGraph[pathname].from != null) {
			history.push(transitionGraph[pathname].from);
		} else if ((scrollTop == canScrollTop) && wheelDeltaY < -200 && transitionGraph[pathname].to != null) {
			history.push(transitionGraph[pathname].to);
		}
	}

	// Lifecicle
	componentWillReceiveProps() {
		clearTimeout(this._touchTimer);
		this._removeHandlerOnTouch();
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
			this._touchTimer = setTimeout(::this._addHandlerOnTouch, 600);
	}

	componentWillUnmount() {
		this._removeHandlerOnTouch();
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

export default withRouter(TriggerTouch);
