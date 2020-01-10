import React from 'react';
import PropTypes from 'prop-types';

import getUrl from 'styleguide-client/utils/getUrl';

import Item from './Item';

import Nav from './Navigation.styled';

const Navigation = ({
  items,
  useRouterLinks = false,
  useHashId,
  hashPath,
}) => {
  const mappedItems = items
    .map(item => {
      if (item.href) {
        return item;
      }
      return {
        ...item,
        href: getUrl({
          name: item.name,
          slug: item.slug,
          anchor: !useRouterLinks,
          hashPath: useRouterLinks ? hashPath : false,
          id: false,
        }),
      };
    })
    .filter(item => item.visibleName);

  if (mappedItems.length === 0) {
    return null;
  }

  return (
    <Nav>
      {mappedItems.map(item => (
        <Item key={item.slug} {...item} />
      ))}
    </Nav>
  );
};

Navigation.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Navigation;
