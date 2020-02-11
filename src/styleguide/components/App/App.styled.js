import styled, { css } from 'styled-components';

import { palette } from 'src/lib/styles/colors.styled';
import { on } from 'src/lib/styles/responsive.styles';
import typography from 'src/lib/styles/typography.styled'

import ButtonTag from 'src/lib/components/atoms/Button/Button.styled';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ isMenuOpen }) => isMenuOpen && css`
    height: 100vh;
    overflow: hidden;
  `}
  ${on('tablet-up')`
    flex-direction: row;
  `}
`;

AppWrapper.Content = styled.main`
  position: relative;
  padding: 20px 15px;
  ${on('fablet-down')`
    margin-top: 60px;
    transition: left 0.5s cubic-bezier(.17, .01, .25, .99);
    left: ${({ isMenuOpen }) => isMenuOpen ? '240px' : 0};
  `}
  ${on('tablet-up')`
    flex: 0 1 calc(100% - 240px);
    max-width: 860px;
    padding: 20px 40px;
  `}
`;

AppWrapper.Content.MenuButton = styled(ButtonTag)`
  padding: 10px;
  position: absolute;
  background-color: ${palette['almost-light']};
  border-radius: 0;
  top: 20px;
  transition: left 0.5s cubic-bezier(.17, .01, .25, .99);
  left: ${({ isMenuOpen }) => isMenuOpen ? '240px' : '0'};
  z-index: 6;
  
  &,
  &:active,
  &:focus, 
  &:hover {
    outline: 0;
    color: ${palette['almost-black']};
  }
  
  ${on('tablet-up')`
    display: none;
  `}
`;

AppWrapper.Sidebar = styled.aside`
  position: relative;
  background-color: ${palette['almost-light']};
  ${on('fablet-down')`
    width: 240px;
    position: absolute;
    z-index: 5;
    transition: left 0.5s cubic-bezier(.17, .01, .25, .99);
    left: ${({ isMenuOpen }) => isMenuOpen ? '0' : '-240px'};
  `}
  ${on('tablet-up')`
    flex: 0 0 240px;
    min-height: 100vh;
    box-shadow: 0 0 3px rgba(58, 77, 95, .5);
  `}
`;

AppWrapper.Header = styled.header`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${palette['almost-light']};
`;

AppWrapper.Logo = styled.img`
  ${({ as, alt }) => as === 'h1' && css`
    ${typography.fontSize(20)};
    font-weight: 400;
    margin: 0 15px 0 0;
    &:before {
      content: "${alt}";
    }
  `}
`;

export default AppWrapper;
