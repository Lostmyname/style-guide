import styled from 'styled-components';

import typography from 'src/styles/typography.styled';

import { defaultButton, outlinedButton, raisedButton, disabledButton } from './helpers.styled';

const ButtonTag = styled.button`
  ${({ textSize }) => textSize === 'small' ? typography.micro : typography.base}
  
  font-family: inherit;
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 10px 40px;
  border-radius: 4px;
  text-align: center;
  transition: all 0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97);
  
  width: ${({ fullWidth }) => fullWidth && '100%'};
  
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
  
  ${({ outlined, unstyled, color, }) => !outlined && !unstyled && defaultButton(color)}
  ${({ outlined, unstyled, color, }) => outlined && !unstyled && outlinedButton(color)}
  ${({ raised, color }) => raised && raisedButton(color)};
  ${({ disabled }) => disabled && disabledButton};
`;

/** @component */
export default ButtonTag;

/** @component */
export const ButtonLinkTag = ButtonTag.withComponent('a');
