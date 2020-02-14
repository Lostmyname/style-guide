import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

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
  const contentDescription = get(content, 'props.examples[0].content');
  const startsWithOneHashRegex = /^#( |\w)/g;
  const hasTitleInContent = contentDescription && !!contentDescription.match(startsWithOneHashRegex);
  return (
    <section>
      {name && !hasTitleInContent && (
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
