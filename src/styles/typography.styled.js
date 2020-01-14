import { css } from 'styled-components';
import { rem, fontFace } from 'polished';

export const BASE_FONT_SIZE = 16;

const addFont = (fontName, fileName, fontWeight = 400, fontStyle = 'normal', fileFormats = ['eot','woff2','woff', 'svg']) => css`
  ${fontFace({
    fontFamily: fontName,
    fontFilePath: `./src/assets/fonts/${fileName}`,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    fileFormats: fileFormats 
  })}
`;


const font = {
  base: css`
    font-family: 'Lato', sans-serif;
  `,
  headings: css`
    font-family: 'Wonderbly Boing', sans-serif;
  `,
  monospace: css`
    font-family: 'Inconsolata', monospace;
  `,
  imports: css`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
    
    ${addFont('Wonderbly Boing', 'WonderblyBoing-RegularWEB')};
    ${addFont('Wonderbly Boing', 'WonderblyBoing-LightWEB', 200)}
    ${addFont('Wonderbly Boing', 'WonderblyBoing-MediumWEB', 500)};
    ${addFont('Wonderbly Boing', 'WonderblyBoing-SemiBoldWEB', 500)};
  `
};

const baseRem = value => rem(value, BASE_FONT_SIZE);

const lineHeight = (value, useOldCalc = false) => css`
  line-height: ${useOldCalc ? ((value + 8) / value) : baseRem(value * 1.618)};
`;

const fontSize = (value, { desktopValue, useOldLineHeightCalc = false } = {}) => css`
  font-size: ${baseRem(value)};
  ${lineHeight(value, useOldLineHeightCalc)}
  ${desktopValue && desktopValue !== value && 
    `@media screen (min-width: 778px) {
      font-size: ${baseRem(desktopValue)};
      ${lineHeight(desktopValue, useOldLineHeightCalc)}
    }`
  }
`;

const tera = css`
  ${fontSize(30, { desktopValue: 36, useOldLineHeightCalc: true })}
  ${font.headings};
  font-weight: 600;
`;

const giga = css`
  ${fontSize(24, { desktopValue: 30, useOldLineHeightCalc: true })}
  ${font.headings};
  font-weight: 500;
`;

const mega = css`
  ${fontSize(20, { desktopValue: 24, useOldLineHeightCalc: true })}
  ${font.headings};
  font-weight: 400;
`;

const kilo = css`
  ${fontSize(18, { desktopValue: 20, useOldLineHeightCalc: true })}
  font-weight: 400;
`;

const base = css`
  ${fontSize(16, { useOldLineHeightCalc: true })}
  font-weight: 400;
`;

const milli = css`
  ${fontSize(16, { useOldLineHeightCalc: true })}
  font-weight: 300;
`;

const micro = css`
  ${fontSize(14, { useOldLineHeightCalc: true })}
  font-weight: 300;
`;

export default {
  rem: baseRem,
  lineHeight,
  fontSize,
  font,
  tera,
  giga,
  mega,
  kilo,
  base,
  milli,
  micro,
}
