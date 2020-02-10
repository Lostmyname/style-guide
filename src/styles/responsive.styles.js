import { css } from 'styled-components';
import mapKeys from 'lodash/mapKeys';
import kebabCase from 'lodash/kebabCase';

import breakpoints from 'src/config/breakpoints';

export const on = label => (...args) => {
	const remappedBreakpoints = mapKeys(breakpoints, (value, key) => kebabCase(key));
	const { minWidth, maxWidth } = remappedBreakpoints[label] || {};

	if (minWidth && maxWidth) {
		return css`
			@media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
				${css(...args)}
			}
		`;
	}

	if (minWidth) {
		return css`
			@media (min-width: ${minWidth}px) {
				${css(...args)}
			}
		`;
	}

	if (maxWidth) {
		return css`
			@media (max-width: ${maxWidth}px) {
				${css(...args)}
			}
		`;
	}
};
