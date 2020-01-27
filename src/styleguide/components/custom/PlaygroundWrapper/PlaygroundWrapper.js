import React from 'react';

import Wrapper from './PlaygroundWrapper.styled';

const PlaygroundWrapper = ({ children, spacing = 5 }) => (
  <Wrapper spacing={spacing}>
    {React.Children.map(children, (child, idx) => (
      <div key={idx}>
        {child}
      </div>
    ))}
  </Wrapper>
);

export default PlaygroundWrapper;
