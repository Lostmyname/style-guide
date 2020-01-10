import React from 'react';

import Wrapper from './PlaygroundWrapper.styled';

const PlaygroundWrapper = ({ children, spacing = 5 }) => (
  <Wrapper spacing={spacing}>
    {children}
  </Wrapper>
);

export default PlaygroundWrapper;
