import styled from 'styled-components';

import { readableColor, tint } from 'polished';

import typography from 'src/styles/typography.styled';
import { palette } from 'src/styles/colors.styled';

const getBackgroundColour = ({ colour, outlined, unstyled, disabled }, state = null) => {
  if (outlined || unstyled) {
    return 'transparent';
  }

  const color = palette[colour] || palette['grey-medium'];

  if (disabled) {
    return tint(0.5, color);
  }

  return color;
};

const getFontColour = (props, state = null) => {
  const { colour, outlined } = props;

  if (outlined) {
    return palette[colour] || palette['grey-dark'];
  }

  switch (colour) {
    case 'green':
    case 'grey-medium':
      return palette.white;
    default:
      return readableColor(getBackgroundColour(props), palette['almost-black'], palette.white);
  }
};

const ButtonTag = styled.button`
  ${({ textSize }) => textSize === 'small' ? typography.micro : typography.base}
  
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 10px 40px;
  border-radius: 4px;
  text-align: center;
  transition: all 0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97);
  
  background: ${props => getBackgroundColour(props)};
  color: ${props => getFontColour(props)};
  
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    background: ${props => getBackgroundColour(props, 'hover')};
    color: ${props => getFontColour(props, 'hover')};
  }
  
  &:active {
    background: ${props => getBackgroundColour(props, 'active')};
    color: ${props => getFontColour(props, 'active')};
  }
`;

/** @component */
export default ButtonTag;

/** @component */
export const ButtonLinkTag = ButtonTag.withComponent('a');
