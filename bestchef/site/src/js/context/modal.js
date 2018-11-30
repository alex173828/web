import React from 'react';

export const ModalContext = React.createContext({
	classNameContent: '',
	value: null,

	close: () => ({}),
	open: () => ({}),
	opened: false
});
