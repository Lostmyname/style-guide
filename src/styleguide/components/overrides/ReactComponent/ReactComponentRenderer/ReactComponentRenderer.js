import React from 'react';
import PropTypes from 'prop-types';

import DefaultPathline from 'styleguide-components/Pathline';
import Tabs from 'src/lib/styleguide/components/custom/Tabs';

import Component from './ReactComponentRenderer.styled';
import compact from 'lodash/compact';

const ReactComponentRenderer = ({
  heading,
  pathLine,
  description,
  docs,
  examples,
  tabBody
}) => (
  <Component>
    <Component.Header>
      {heading}
      {(docs || pathLine) && (
        <Component.Header.Docs>
          {docs}
          <DefaultPathline>{pathLine}</DefaultPathline>
        </Component.Header.Docs>
      )}
    </Component.Header>
    {examples}
    <Tabs
      tabTitles={compact([description && 'Developer notes', tabBody && 'PropType Table'])}
      tabItems={compact([description, tabBody])}
    />
  </Component>
);

ReactComponentRenderer.propTypes = {
  heading: PropTypes.node.isRequired,
  pathLine: PropTypes.string,
  tabButtons: PropTypes.node,
  tabBody: PropTypes.node,
  description: PropTypes.node,
  docs: PropTypes.node,
  examples: PropTypes.node,
};

export default ReactComponentRenderer;
