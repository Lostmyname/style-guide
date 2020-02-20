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

const getSize = sizeKey => sizes[sizeKey] || sizes.none;

export const padded = (...sides) => css`
  padding: ${sides.map(getSize).join(' ')};
`;

export const spaced = (...sides) => css`
  margin: ${sides.map(getSize).join(' ')};
`;

['top', 'right', 'bottom', 'left'].forEach(side => {
  padded[side] = (sizeKey) => css`
    padding-${side}: ${getSize(sizeKey)};
  `;
  spaced[side] = (sizeKey) => css`
    margin-${side}: ${getSize(sizeKey)};
  `;
});
