import React from 'react';
import PropTypes from 'prop-types';

import DefaultSectionHeading from 'styleguide-components/SectionHeading';
import DefaultMarkdown from 'styleguide-components/Markdown';

const SectionRenderer = (props) => {
  const {
    name,
    slug,
    content,
    sections,
    components,
    depth,
    description,
    pagePerSection
  } = props;
  return (
    <section>
      {name && (
        <DefaultSectionHeading
          depth={depth}
          id={slug}
          slotName="sectionToolbar"
          pagePerSection={pagePerSection}
          slotProps={props}
        >
          {name}
        </DefaultSectionHeading>
      )}
      {description && <DefaultMarkdown text={description} />}
      {content}
      {sections}
      {!name && components}
    </section>
  );
};

SectionRenderer.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string.isRequired,
  content: PropTypes.node,
  sections: PropTypes.node,
  isolated: PropTypes.bool,
  depth: PropTypes.number.isRequired,
  pagePerSection: PropTypes.bool,
};

export default SectionRenderer;
