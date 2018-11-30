import React from 'react';
import classNames from 'classnames';
import {Switch, Route} from 'react-router-dom';
// SwitchersView
import SwitcherWithOneMounted from './_mounted/switcher_mounted_one.jsx';
import SwitcherWithTwoMounted from './_mounted/switcher_mounted_two.jsx';
// SwitcherTrigger
import SwitcherTriggerScroll from './_trigger/switcher_trigger_scroll.jsx';
import SwitcherTriggerTouch from './_trigger/switcher_trigger_touch.jsx';
// Detect
import {isTouchDevice} from 'src/js/helpers/is-mobile';
// Context
import {AnimationContext} from 'src/js/contexts/animation/animation';

const Switcher = ({children, className, transitionGraph, routes}) => {
	const Trigger = isTouchDevice()
		? SwitcherTriggerTouch
		: SwitcherTriggerScroll;

	return (
		<Trigger {...{
			transitionGraph,
			className
		}}>
			<Route
				render={({location}) => (
					<AnimationContext.Consumer>
						{({turnOn, turnOff}) => (
							<SwitcherWithTwoMounted
								uniqKey={location.pathname}
								{...{
									turnOff,
									turnOn,
									routes
								}}
							>
								<Switch location={location}>
									{children}
								</Switch>
							</SwitcherWithTwoMounted>
						)}
					</AnimationContext.Consumer>
				)}
			/>
		</Trigger>
	);
}

export default Switcher;
