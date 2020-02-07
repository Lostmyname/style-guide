import React, { useState, useEffect } from 'react';
import { useDimensionsEffect } from 'react-viewport-utils';

import get from 'lodash/get';

import { useResponsive } from '../../hooks';

import AppWrapper from './App.styled';

const App = ({ title, image, toc, hasSidebar, children }) => {
  const { isTabletUp } = useResponsive();
  const [ isOpen, setIsOpen ] = useState(isTabletUp);
  const location = get(window, 'location', {});

  useDimensionsEffect(() => {
    if (isTabletUp) {
      setIsOpen(false)
    }
  }, [ isTabletUp ]);

  useEffect(() => {
    setIsOpen(false)
  }, [ location.href ]);

  return (
    <AppWrapper isMenuOpen={isOpen}>
      {hasSidebar && (
        <AppWrapper.Content.MenuButton
          isMenuOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          unstyled>
          {isOpen ? 'Close' : 'Menu'}
        </AppWrapper.Content.MenuButton>
      )}
      {hasSidebar && (
        <AppWrapper.Sidebar isMenuOpen={isOpen}>
          <AppWrapper.Header>
            <AppWrapper.Logo as={!image && 'h1'} src={image} alt={title} width={image && '200px'} />
          </AppWrapper.Header>
          {toc}
        </AppWrapper.Sidebar>
      )}
      <AppWrapper.Content isMenuOpen={isOpen}>
        {children}
      </AppWrapper.Content>
    </AppWrapper>
  )
};

export default App;
