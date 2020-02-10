import { css } from 'styled-components';
import { darken } from 'polished';
import { palette } from 'src/styles/colors.styled';
import { baseRem } from 'src/styles/typography.styled';

const buttonBoxShadow = (baseColor, size = 4) => css`
  box-shadow: 0px ${baseRem(size)} ${baseColor};
`;

export const defaultButton = (baseColor, hoverColor) => css`
  background-color: ${palette[baseColor] || palette['grey-medium']};
  color: ${palette.white};
  
  ${({ disabled }) => !disabled && css`
    &:hover,
    &:focus {
      background: ${hoverColor || darken(0.15, palette[baseColor] || palette['grey-medium'])};
      color: ${palette.white};
    }
    &:active,
    &:active:hover,
    &:active:focus {
      transform: scale(0.95);
    }
  `};
`;

export const outlinedButton = baseColor => css`
  background-color: transparent;
  border: ${baseRem(2)} solid ${({ raised }) => {
    if (raised) {
      return darken(0.15, palette[baseColor] || palette['grey-medium']);
    }
    return palette[baseColor] || palette['grey-medium'];
  }};
  
  border-bottom: ${({ raised }) => raised && 'none'};
  color: ${({ raised }) => {
    if (raised) {
      return darken(0.15, palette[baseColor] || palette['grey-medium']);
    }
    return palette[baseColor] || palette['grey-medium'];
  }};
  padding: 8px 38px;
  
  ${({ disabled }) => !disabled && css`
    &:hover,
    &:focus {
      ${buttonBoxShadow(palette[baseColor] || palette['grey-medium'], 2)}
      padding-bottom: 6px;
      transform: translateY(-4px);
      margin-bottom: 2px;
    }
  
    &:active,
    &:active:hover,
    &:active:focus {
      background: ${palette[baseColor] || palette['grey-medium']};
      box-shadow: none;
      padding-bottom: 8px;
      margin-bottom: 0;
      color: ${palette.white};
      transform: scale(0.95) translateY(0);
    }
  `}
`;

export const disabledButton = css`
  &,
  &:hover,
  &:focus,
  &:active {
    ${({ raised }) => raised && buttonBoxShadow(darken(0.15, palette['grey-light']))}
    background-color: ${({ outlined }) => !outlined && palette['grey-light']};
    border-color: ${({ outlined }) => outlined && palette['grey-light']};
    color: ${({ outlined }) => outlined ? palette['grey-light'] : palette['almost-black']};
    cursor: not-allowed;
    transform: translateY(0);
  }
`;

export const raisedButton = (baseColor) => css`
  ${buttonBoxShadow(darken(0.15, palette[baseColor] || palette['grey-medium']))}
  padding-bottom: 6px;
  margin-bottom: 4px;
  
  ${({ disabled }) => !disabled && css`
    &:hover,
    &:focus {
     ${buttonBoxShadow(darken(0.30, palette[baseColor] || palette['grey-medium']))}
      color: ${palette.white};
      border-color: ${darken(0.30, palette[baseColor] || palette['grey-medium'])};
    }
    
    &:active,
    &:active:hover,
    &:active:focus {
      border-color: transparent;
      box-shadow: none;
      transform: translateY(2px);
      padding-bottom: 8px;
      margin-bottom: 0;
    }
  `};
`;

export const unstyledButton = css`
  background-color: transparent;
  border-color: transparent;
  color: ${palette['almost-black']};
  padding-left: 0;
  padding-right: 0;
  &:hover, 
  &:focus {
    color: ${({ color }) => palette[color] || palette['grey-medium']};
  }
`;
