import { css } from 'styled-components';

export const palette = {
  // Green
  'green-light': '#BFE8DE',
  'green': '#2CB492',
  'green-medium': '#80D2BE',
  'green-dark': '#176F5E',
  // Yellow
  'yellow-light': '#FFF0C3',
  'yellow': '#FFCC37',
  'yellow-medium': '#FFE087',
  'yellow-dark': '#DDAC31',
  // Pink
  'pink-light': '#FCD4D7',
  'pink': '#F6707B',
  'pink-medium': '#FAA9B0',
  'pink-dark': '#7A373D',
  // Blue
  'blue-light': '#B2CCE1',
  'blue': '#69CFD5',
  'blue-medium': '#00549a',
  'blue-dark': '#5A6E73',
  // Red
  'red': '#F27860',
  'red-dark': '#C65F4A',
  // Purple
  'purple-light': '#D0CEE1',
  'purple': '#645B9B',
  'purple-medium': '#A29DC3',
  'purple-dark': '#312D4D',
  // Orange
  'orange-light': '#FCDDD0',
  'orange': '#F48D61',
  'orange-medium': '#F8BBA0',
  'orange-dark': '#C65F4A',
  // White
  'white': '#FFFFFF',
  // Stone
  'stone-light': '#F5F5F0',
  'stone': '#D8D4C7',
  'stone-dark': '#ACA99D',
  // Grey
  'almost-light': '#F2F4F5',
  'grey-light': '#B5BCC3',
  'grey': '#5A6E73',
  'grey-medium': '#6B7A87',
  'grey-dark': '#3a4d5f',
  'almost-black': '#092137',
};

export const backgroundColor = colorKey => css`
  background-color: ${palette[colorKey] || palette['grey-medium']};
`;

export const color = colorKey => css`
  color: ${palette[colorKey] || palette['grey-medium']};
`;
