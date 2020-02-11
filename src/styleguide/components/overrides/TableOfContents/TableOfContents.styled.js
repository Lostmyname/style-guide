import styled from 'styled-components';

import { on } from 'src/lib/styles/responsive.styles';

const TOC = styled.div`
  overflow-y: auto;
  ${on('fablet-down')`
    height: calc(100vh - 145px);
  `}
`;

export default TOC;
