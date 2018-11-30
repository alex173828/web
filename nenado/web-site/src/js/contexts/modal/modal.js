import React from 'react';

export const ModalContext = React.createContext({
	classNameContent: '',

	close: () => ({}),
	open: () => ({}),
	opened: false
});
