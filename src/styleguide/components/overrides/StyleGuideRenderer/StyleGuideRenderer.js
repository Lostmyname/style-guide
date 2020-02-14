import React from 'react';
import PropTypes from 'prop-types';

import { ViewportProvider } from 'react-viewport-utils';
import { HelmetProvider } from 'react-helmet-async';

import Global from 'src/lib/styles/global.styled';

import App from '../../App';

const StyleGuideRenderer = (props) => (
  <ViewportProvider>
    <HelmetProvider>
      <Global />
      <App {...props} />
    </HelmetProvider>
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
