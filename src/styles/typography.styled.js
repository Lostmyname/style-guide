import { css } from 'styled-components';
import { rem } from 'polished';

const font = {
  base: css`
    font-family: 'Poppins', sans-serif;
  `,
  monospace: css`
    font-family: 'Inconsolata', monospace;
  `,
};

const baseRem = value => rem(value, 18);

const lineHeight = (value, useOldCalc = false) => css`
  line-height: ${useOldCalc ? ((value + 8) / value) : baseRem(value * 1.618)};
`;

const fontSize = (value, useOldLineHeightCalc = false) => css`
  font-size: ${baseRem(value)};
  ${lineHeight(value, useOldLineHeightCalc)}
`;

const peta = css`
  ${fontSize(36, true)}
  font-weight: 600;
`;

const tera = css`
  ${fontSize(30, true)}
  font-weight: 600;
`;

const giga = css`
  ${fontSize(24, true)}
  font-weight: 500;
`;

const mega = css`
  ${fontSize(20, true)}
  font-weight: 400;
`;

const kilo = css`
  ${fontSize(18, true)}
  font-weight: 400;
`;

const base = css`
  ${fontSize(16, true)}
  font-weight: 400;
`;

const milli = css`
  ${fontSize(16, true)}
  font-weight: 300;
`;

const micro = css`
  ${fontSize(14, true)}
  font-weight: 300;
`;

export default {
  rem: baseRem,
  lineHeight,
  fontSize,
  font,
  peta,
  tera,
  giga,
  mega,
  kilo,
  base,
  milli,
  micro,
}
