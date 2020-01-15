import styled from 'styled-components';
import { palette } from 'src/styles/colors.styled';
import typography from 'src/styles/typography.styled';

/** @component */
const NavItem = styled.li`
  ${typography.fontSize(14)}; 
  
  margin: ${({ depth }) => depth === 0 ? '10px 20px' : '0'};
  padding: 0;
  & > a[class*="rsg--link"] {
    display: inline-block;
    width: calc(100% + 20px);
    margin: 0 -10px;
    padding: 8px 10px;
    position: relative;
    color: ${({ selected }) => selected ? '#FFF' : palette['almost-black']}
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 4px;
      background-color: ${palette.green};
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      transform-origin: 25% 50%;
      opacity: ${({ selected }) => selected ? '1' : '0'};
      transform: ${({ selected }) => selected ? 'scaleX(1) scaleY(1)' : 'scaleX(0) scaleY(.5)'};
      transition: .25s cubic-bezier(.07,.74,.13,1.18);
    }
    &:hover {
      color: ${({ selected }) => selected ? '#FFF' : palette.green}
    }
  }
`;

/** @component */
NavItem.Heading = styled.h4`
  ${({ depth }) => depth === 0 && typography.fontSize(16)};
  ${({ depth }) => depth === 1 && typography.fontSize(14)};
  
  margin: ${({ depth }) => depth === 0 ? '0 -20px' : '0'};
  margin-top: ${({ depth }) => depth !== 0 && '15px'};
  padding: ${({ depth }) => depth === 0 && '15px 20px'};
  font-weight: ${({ depth }) => depth === 0 ? '400' : '500'};
  background-color: ${({ depth }) => depth === 0 && '#FFF'};
  border-top: ${({ depth }) => depth === 0 && `1px solid ${palette.stone}`};
  border-bottom: ${({ depth }) => depth === 0 && `1px solid ${palette.stone}`};
  & + a[class*="rsg--link"] {
    margin-top: 10px;
  }
  &:not(:last-child) + ul {
    margin-bottom: ${({ depth }) => depth !== 0 && '20px'};
  }
`;

/** @component */
export default NavItem;
