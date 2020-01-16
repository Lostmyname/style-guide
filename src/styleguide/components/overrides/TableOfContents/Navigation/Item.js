import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { useStyleGuideContext } from 'styleguide-components/Context';

import NavItem from './Item.styled';

const Link = ({ href, target, sections, depth, selected, handleOnClick, children }) => {
  if (href === '_blank' || (sections && sections.length !== 0 && depth === 0)) {
    return (
      <Fragment>
        <NavItem.Heading depth={depth}>
          {children}
        </NavItem.Heading>
        {href !== '_blank' && (
          <Link href={href} target={target} handleOnClick={handleOnClick}>
            Introduction
          </Link>
        )}
      </Fragment>
    );
  }

  return (
    <NavItem.Link
      href={href}
      onClick={handleOnClick}
      target={target}
      selected={selected}
    >
      {children}
    </NavItem.Link>
  )
};

const Item = ({
  visibleName,
  href,
  content,
  sections,
  shouldOpenInNewTab,
  selected,
  initialOpen,
  depth,
}) => {
  const { config: { tocMode } } = useStyleGuideContext();
  const [ open, setOpen ] = useState(!!initialOpen);

  return (
    <NavItem depth={depth}>
      <Link
        href={href}
        onClick={() => setOpen(tocMode !== 'collapse' ? true : !open)}
        target={shouldOpenInNewTab ? '_blank' : undefined}
        sections={sections}
        depth={depth}
        selected={selected}
      >
        {visibleName}
      </Link>
      {open && content ? content : null}
    </NavItem>
  )
};

Item.propTypes = {
  visibleName: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  content: PropTypes.node,
  shouldOpenInNewTab: PropTypes.bool,
  selected: PropTypes.bool,
  initialOpen: PropTypes.bool,
};

export default Item;
