// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import {
  fontSize,
  fontFamilySecondary,
  fontFamilyPrimary,
  fontWeightLight,
  fontWeightNormal,
  fontWeightMedium,
  fontWeightSemiBold,
  fontWeightBold,
  fontWeightExtraBold,
} from './fonts';
import {
  media,
  mobile,
  mobileL,
  tablet,
  laptop,
  laptopL,
  desktop,
  desktopL,
} from './media';
import { colors } from 'global';

import {
  fontColorGrayNurse,
  fontColorDoveGray,
  fontColorMineShaft,
  fontColorGray,
} from './colors';

const backgroundColor = 'background-color: #F4F5F4;';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    ${backgroundColor}
    ${fontSize(20)}
    ${fontFamilySecondary}
    ${fontWeightNormal}
  }
  
  h1 {
    ${fontFamilyPrimary}
    ${fontWeightLight}

    ${mobile(fontSize(32.44))}
    ${tablet(fontSize(47.78))}
    ${desktop(fontSize(61.04))}
    ${desktopL(fontSize(89.76))}
  }

  h2 {
    ${fontFamilyPrimary}
    ${fontWeightLight}

    ${mobile(fontSize(28.83))}
    ${tablet(fontSize(39.81))}
    ${desktop(fontSize(48.83))}
    ${desktopL(fontSize(67.34))}
  }
  
  h3 {
    ${fontFamilySecondary}
    ${fontWeightNormal}

    ${mobile(fontSize(25.63))}
    ${tablet(fontSize(33.18))}
    ${desktop(fontSize(39.06))}
    ${desktopL(fontSize(50.52))}
  }

  h4 {
    ${fontFamilySecondary}
    ${fontWeightNormal}

    ${mobile(fontSize(22.78))}
    ${tablet(fontSize(27.65))}
    ${desktop(fontSize(31.25))}
    ${desktopL(fontSize(37.9))}
  }

  h5 {
    ${fontFamilySecondary}
    ${fontWeightNormal}

    ${mobile(fontSize(20.25))}
    ${tablet(fontSize(23.04))}
    ${desktop(fontSize(25))}
    ${desktopL(fontSize(28.43))}
  }

  h6 {
    ${fontFamilySecondary}
    ${fontWeightMedium}

    ${mobile(fontSize(18))}
    ${tablet(fontSize(19.24))}
    ${desktop(fontSize(20))}
    ${desktopL(fontSize(21.33))}
  }

  .s1 {
    ${fontFamilySecondary}
    ${fontWeightNormal}

    ${mobile(fontSize(16))}
    ${tablet(fontSize(16))}
    ${desktop(fontSize(16))}
    ${desktopL(fontSize(16))}
  }

  .s2 {
    ${fontFamilySecondary}
    ${fontWeightMedium}

    ${mobile(fontSize(14.22))}
    ${tablet(fontSize(13.33))}
    ${desktop(fontSize(12.8))}
    ${desktopL(fontSize(12))}
  }

  button {
    ${fontFamilyPrimary}
    ${fontWeightMedium}
    ${fontSize(16)}
  }

  p {
    ${fontFamilySecondary}
    ${fontWeightNormal}
    ${fontColorGray}

    ${mobile(fontSize(16))}
    ${tablet(fontSize(16))}
    ${desktop(fontSize(16))}
    ${desktopL(fontSize(16))}
  }

  .p2 {
    ${fontWeightNormal}

    ${mobile(fontSize(14.22))}
    ${tablet(fontSize(13.33))}
    ${desktop(fontSize(12.8))}
    ${desktopL(fontSize(12))}
  }

  caption {
    ${fontWeightNormal}
    
    ${mobile(fontSize(12.64))}
    ${tablet(fontSize(11.11))}
    ${desktop(fontSize(10.24))}
    ${desktopL(fontSize(9))}
  }

  label {
    ${fontWeightNormal}

    ${mobile(fontSize(11.24))}
    ${tablet(fontSize(9.26))}
    ${desktop(fontSize(8.19))}
    ${desktopL(fontSize(6.76))}
  }
`;

export default GlobalStyle;
