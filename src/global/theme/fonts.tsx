// Specify Primary and Secondary Font-Family
export const fontFamilyPrimary = 'font-family: Khula;';
export const fontFamilySecondary = 'font-family: Montserrat;';

// Font-Weights
export const fontWeight = (weight: number): string => {
  return `font-weight: ${weight};`;
};

export const fontWeightLight = fontWeight(300);
export const fontWeightNormal = fontWeight(400);
export const fontWeightMedium = fontWeight(500);
export const fontWeightSemiBold = fontWeight(600);
export const fontWeightBold = fontWeight(700);
export const fontWeightExtraBold = fontWeight(800);

// Font-Size - currently only working with pixels
export const fontSize = (size: number | string): string => {
  if (typeof size === 'string') return `font-size: ${size};`;

  return `font-size: ${size}px;`;
};
