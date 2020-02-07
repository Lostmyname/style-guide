import { createGlobalStyle } from 'styled-components'

import typography, { BASE_FONT_SIZE } from './typography.styled'

const GlobalStyle = createGlobalStyle`
  ${typography.font.imports}
  html, body {
    ${typography.font.base}
    font-size: ${BASE_FONT_SIZE}px;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
