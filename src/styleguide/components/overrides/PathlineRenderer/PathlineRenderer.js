import React from 'react';
import PropTypes from 'prop-types';
import { compiler } from 'markdown-to-jsx';

const PathlineRenderer = ({ children }) => {
  return (
    <p>Location: {compiler(children)}</p>
  );
};

PathlineRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PathlineRenderer;
