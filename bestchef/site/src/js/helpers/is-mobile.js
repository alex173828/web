function isTouchDevice() {
	const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
	const mq = query => window.matchMedia(query).matches;

	const isTouch =
		('ontouchstart' in window) ||
		window.DocumentTouch &&
		document instanceof DocumentTouch;

	if (isTouch) return true;

	const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
	return mq(query);
}

export {isTouchDevice};
