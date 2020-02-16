function calcFontSize(number: number) {
  return `${number / 16}em`;
}

export const typography = {
  family: 'Open Sans, sans-serif',
  lineHeight: {
    heading: 1.3,
    body: 1.7
  },
  heading: {
    size: {
      tiny: `calc(${calcFontSize(12)} + 0.5vw)`,
      small: `calc(${calcFontSize(14)} + 0.5vw)`,
      regular: `calc(${calcFontSize(16)} + 0.5vw)`,
      medium: `calc(${calcFontSize(20)} + 0.5vw)`,
      big: `calc(${calcFontSize(30)} + 0.5vw)`,
      large: `calc(${calcFontSize(34)} + 0.5vw)`,
      xl: `calc(${calcFontSize(40)} + 0.5vw)`
    }
  },
  body: {
    size: {
      tiny: `calc(${calcFontSize(11)} + 0.1vw)`,
      small: `calc(${calcFontSize(13)} + 0.1vw)`,
      regular: `calc(${calcFontSize(16)} + 0.1vw)`,
      medium: `calc(${calcFontSize(18)} + 0.1vw)`,
      large: `calc(${calcFontSize(20)} + 0.1vw)`
    }
  },
  weight: {
    regular: '400',
    medium: '600'
  }
};
