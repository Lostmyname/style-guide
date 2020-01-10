import React, { useState } from 'react';
import PropTypes from 'prop-types';

import has from 'lodash/has';

import filterSectionsByName from 'styleguide-client/utils/filterSectionsByName';
import getUrl from 'styleguide-client/utils/getUrl';
import { getHash } from 'styleguide-client/utils/handleHash';

import DefaultTableOfContentsRenderer from 'styleguide-components/TableOfContents/TableOfContentsRenderer';

import Navigation from './Navigation';

import TOC from './TableOfContents.styled';

const renderLevel = (sections, loc, tocMode, useRouterLinks = false, searchTerm = '', hashPath = [], useHashId = false, depth = 0) => {
  const { hash, pathname } = loc;
  const windowHash = pathname + (useRouterLinks ? hash : getHash(hash));

  let childrenContainSelected = false;

  const processedItems = sections.reduce((processed, section) => {
    const children = [
      ...(section.sections || []),
      ...(section.components || [])
    ];

    const sectionDepth = section.sectionDepth || 0;
    const contentIsEmpty = has(section, 'content') && !section.content;

    if (contentIsEmpty && children.length === 0) {
      return processed;
    }

    let childHashPath = [...hashPath, section.name ? section.name : '-'];

    if (sectionDepth === 0 && useHashId) {
      childHashPath = hashPath;
    }

    let child = { content: undefined, containsSelected: false };
    if (children.length > 0) {
      child = renderLevel(children, loc, tocMode, useRouterLinks, searchTerm, childHashPath, sectionDepth === 0, depth + 1);
      if (child.content === null) {
        return processed;
      }
    }
    const { content, containsSelected } = child;

    let href = section.href || getUrl({
      name: section.name,
      slug: section.slug,
      anchor: !useRouterLinks,
      hashPath: useRouterLinks ? hashPath : false,
      id: false,
    });

    // Checks if content is actually a key in content and if it is falsey
    if (contentIsEmpty) {
      section.href = '_blank';
    }

    const selected = !!(href && windowHash === href);


    processed.push({
      ...section,
      heading: !!section.name && children.length > 0,
      depth,
      content,
      selected,
      shouldOpenInNewTab: !!section.href,
      initialOpen: !!searchTerm.length || tocMode !== 'collapse' || containsSelected,
    });

    return processed;
  }, []);

  return {
    content: processedItems.length > 0 ? (
      <Navigation
        items={processedItems}
        hashPath={hashPath}
        useHashId={useHashId}
        useRouterLinks={useRouterLinks}
      />
     ) : null,
    containsSelected: childrenContainSelected,
  };
};

const renderSections = (sections, location, tocMode, useRouterLinks, searchTerm = '') => {
  const hasOneSection = sections.length === 1;
  let firstLevel = sections;

  // If there is only one section, we treat it as a root section
  // In this case the name of the section won't be rendered and it won't get left padding
  // Since a section can contain only other sections,
  // we need to make sure not to loose the subsections.
  // We will treat those subsections as the new roots.
  if (hasOneSection) {
    const section = sections[0];
    const hasSubSections = section.sections && section.sections.length > 0;

    firstLevel = hasSubSections ? section.sections : section.components;
  }

  if (!firstLevel) {
    return null;
  }

  const filtered = filterSectionsByName(firstLevel, searchTerm);
  return renderLevel(filtered, location, tocMode, useRouterLinks, searchTerm).content;
};

const TableOfContents = ({ sections, tocMode, useRouterLinks, location = window.location }) => {
  const [ searchTerm, setSearchTerm ] = useState('');

  return (
    <DefaultTableOfContentsRenderer
      searchTerm={searchTerm}
      onSearchTermChange={setSearchTerm}
    >
      <TOC>
        {renderSections(sections, location, tocMode, useRouterLinks, searchTerm)}
      </TOC>
    </DefaultTableOfContentsRenderer>
  );
};

TableOfContents.propTypes = {
  sections: PropTypes.array.isRequired,
  loc: PropTypes.object,
  useRouterLinks: PropTypes.bool,
};

export default TableOfContents;
