import React from 'react';
import {Route, Switch} from 'react-router-dom';

const animateSwitch =  AnimatorComponent => ({
	updateStep,
	children
}) => (
	<Route
		render={({ location }) => (
			<AnimatorComponent
				uniqKey={location.pathname}
				updateStep={updateStep}
			>
				<Switch
					location={location}
				>
					{children}
				</Switch>
			</AnimatorComponent>
		)}
	/>
);

export {animateSwitch};
