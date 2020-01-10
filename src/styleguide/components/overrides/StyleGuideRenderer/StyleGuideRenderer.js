import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DefaultStyleGuideRenderer from 'styleguide-components/StyleGuide/StyleGuideRenderer';

import GlobalStyles from 'src/styles/global.styled';

const StyleGuideRenderer = (props) => (
  <Fragment>
    <GlobalStyles />
    <DefaultStyleGuideRenderer {...props} />
  </Fragment>
);

StyleGuideRenderer.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.string,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool,
};

export default StyleGuideRenderer;
