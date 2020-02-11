import _ from 'lodash';
import { useDimensions } from 'react-viewport-utils';

import breakpoints from 'src/lib/config/breakpoints';

const calculateResponsiveness = currentWidth => ({ maxWidth = currentWidth, minWidth = currentWidth }) => {
  return currentWidth <= maxWidth && currentWidth >= minWidth;
};

const useResponsive = () => {
  const { outerWidth } = useDimensions();

  return _.chain(breakpoints)
    .mapKeys((value, key) => _.camelCase(`is_${key}`))
    .mapValues(calculateResponsiveness(outerWidth))
    .value();
};

export default useResponsive;
