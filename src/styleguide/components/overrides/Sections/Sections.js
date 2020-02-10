import React from 'react';
import PropTypes from 'prop-types';
import SectionsRenderer from 'styleguide-components/Sections/SectionsRenderer';
import Section from 'styleguide-components/Section';

const Sections = ({ sections, depth }) => (
  <SectionsRenderer>
    {sections
      .filter(section => !section.href || !section.href.startsWith('http'))
      .map((section, idx) => (
        <Section key={idx} section={section} depth={depth} />
      ))
    }
  </SectionsRenderer>
);

Sections.propTypes = {
  sections: PropTypes.array.isRequired,
  depth: PropTypes.number.isRequired,
};

export default Sections;
