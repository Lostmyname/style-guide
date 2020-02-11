import styled from 'styled-components';
import { palette } from 'src/lib/styles/colors.styled';

const Header = styled.header`
  margin-bottom: 20px;
  [class*="rsg--heading"] {
    display: flex;
    align-items: center;
  }
`;

Header.Deprecated = styled.span`
  font-size: 40%;
  margin-left: 10px;
  color: ${palette.red};
  text-transform: uppercase;
`;

export default Header;
