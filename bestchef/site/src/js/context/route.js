import React from 'react';

export const RouteContext = React.createContext({
	pageNumber: 0,
	setPage: () => null
});
