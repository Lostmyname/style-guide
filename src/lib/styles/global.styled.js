import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet-async';

import typography, { BASE_FONT_SIZE } from './typography.styled'

const GlobalStyles = createGlobalStyle`
  ${typography.font.face};
  html, body {
    ${typography.font.base};
    font-size: ${BASE_FONT_SIZE}px;
  }
  p {
    ${typography.lineHeight(BASE_FONT_SIZE)}
  }
  * {
    box-sizing: border-box;
  }
`;

const Global = () => (
  <Fragment>
    <Helmet>
      {typography.font.imports.map(font => (
        <link href={font} rel="stylesheet" />
      ))}
    </Helmet>
    <GlobalStyles />
  </Fragment>
);

export default Global;
