import React from 'react';
import PropTypes from 'prop-types';

import { ViewportProvider } from 'react-viewport-utils';

import GlobalStyles from 'src/lib/styles/global.styled';

import App from '../../App';

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
