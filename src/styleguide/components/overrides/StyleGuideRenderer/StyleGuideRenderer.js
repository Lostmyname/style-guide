import React from 'react';
import PropTypes from 'prop-types';

import { ViewportProvider } from 'react-viewport-utils';

import GlobalStyles from 'src/styles/global.styled';
import App from 'src/styleguide/App';

const StyleGuideRenderer = (props) => (
  <ViewportProvider>
    <GlobalStyles />
    <App {...props} />
  </ViewportProvider>
);

StyleGuideRenderer.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.string,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool,
};

export default StyleGuideRenderer;
