import React from 'react';
import PropTypes from 'prop-types';

import DefaultPathline from 'styleguide-components/Pathline';

import Component from './ReactComponentRenderer.styled';

const ReactComponentRenderer = ({
  heading,
  pathLine,
  description,
  docs,
  examples,
  tabButtons,
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
    {description && (
      <Component.Content>
        {description}
      </Component.Content>
    )}
    {examples}
    {tabButtons && (
      <div>
        <div>{tabButtons}</div>
        <div>{tabBody}</div>
      </div>
    )}
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
