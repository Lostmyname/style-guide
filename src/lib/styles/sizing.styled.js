import css from 'styled-components';
import { baseRem } from './global.styled';

export const sizes = {
  none: 0,
  tiny: baseRem(5),
  small: baseRem(10),
  less: baseRem(15),
  default: baseRem(20),
  more: baseRem(30),
  big: baseRem(40),
  bigger: baseRem(60),
  huge: baseRem(80)
};

const getSize = sizeKeyOrValue => {
  if (typeof sizeKeyOrValue === 'number') {
    return baseRem(sizeKeyOrValue);
  }
  return sizes[sizeKeyOrValue] || sizes.none;
};


export const padded = (...sides) => css`
  padding: ${sides.map(getSize).join(' ')};
`;
padded.top = (value) => css`
  padding-top: ${getSize(value)};
`;
padded.right = (value) => css`
  padding-right: ${getSize(value)};
`;
padded.bottom = (value) => css`
  padding-bottom: ${getSize(value)};
`;
padded.left = (value) => css`
  padding-left: ${getSize(value)};
`;


export const spaced = (...sides) => css`
  margin: ${sides.map(getSize).join(' ')};
`;

spaced.top = (value) => css`
  margin-top: ${getSize(value)};
`;
spaced.right = (value) => css`
  margin-right: ${getSize(value)};
`;
spaced.bottom = (value) => css`
  margin-bottom: ${getSize(value)};
`;
spaced.left = (value) => css`
  margin-left: ${getSize(value)};
`;
