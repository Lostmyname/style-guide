import React from 'react';
import DefaultHeading from 'styleguide-components/Heading';

import Header from './SectionHeadingRenderer.styled';

const SectionHeadingRenderer = ({
  children,
  id,
  depth,
  deprecated,
}) => {
  const headingLevel = Math.min(6, depth);
  return (
    <Header>
      <DefaultHeading level={headingLevel} id={id}>
        {children} {deprecated && <Header.Deprecated>[deprecated]</Header.Deprecated>}
      </DefaultHeading>
    </Header>
  );
};

export default SectionHeadingRenderer;
