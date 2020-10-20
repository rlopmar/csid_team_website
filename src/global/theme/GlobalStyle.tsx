// globalStyles.js
import { createGlobalStyle } from 'styled-components';

// Specify Primary and Secondary Font-Family
const fontFamilyPrimary = 'font-family: Khula;';
const fontFamilySecondary = 'font-family: Montserrat;';

// Font-Weights
const fontWeightLight = 'font-weight: 300';
const fontWeightMedium = 'font-weight: normal;';
const fontWeightBold = 'font-weight: bold;';
const fontWeightBolder = 'font-weight: bolder;';

// Font-Size - currently only working with pixels
const fontSize = (size: number): string => {
  return `font-size: ${size}px;`;
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    ${fontSize(20)}
  }

  h1, h2 {
    ${fontFamilyPrimary}
  }
  
  h3, h4, h5, h6, h7 {
    ${fontFamilySecondary}
  }
  
  h1 {
    ${fontSize(72)}
    ${fontWeightBolder}
  }

  h2 {
    ${fontSize(48)}
    ${fontWeightBolder}
  }
  
  h3 {
    ${fontSize(48)}
    ${fontWeightBolder}
  }

  h4 {
    ${fontSize(48)}
    ${fontWeightMedium}
  }

  h5 {
    ${fontSize(24)}
    ${fontWeightBold}
  }

  h6 {
    ${fontSize(18)}
    ${fontWeightLight}
  }

  h7 {
    ${fontSize(24)}
    ${fontWeightLight}
  }

  s1 {
    ${fontFamilyPrimary}
    ${fontWeightLight}
    ${fontSize(24)}
  }

  s2 {
    ${fontFamilySecondary}
    ${fontWeightBold}
    ${fontSize(22)}
  }

  button {
    ${fontFamilyPrimary}
    ${fontWeightMedium}
    ${fontSize(16)}
  }

  p {
    ${fontFamilyPrimary}
    ${fontWeightMedium}
    ${fontSize(24)}
  }

  p2 {
    ${fontFamilySecondary}
    ${fontWeightMedium}
    ${fontSize(12)}
  }
`;

export default GlobalStyle;
