import React from 'react';

export const AnimationContext = React.createContext({
	turnOff: () => ({}),
	turnOn: () => ({}),
	animation: true
});
