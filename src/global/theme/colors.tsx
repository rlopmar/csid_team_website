const colors = {
  primary: {
    mineShaft: '#3B3B3B',
    grayNurse: '#F4F5F4',
    doveGray: '#696969',
  },
  secondary: {
    gray: '#808080',
    white: '#FFFFFF',
    boulder: '#747474',
    bittersweet: '#FF7575',
    bostonBlue: '#4396B3',
    chestnutRose: '#CC5959',
    killarney: '#386835',
    scienceBlue: '#0A6ED1',
    webOrange: '#FFA500',
  },
};

export default colors;

function fontColor(color: string) {
  return `color: ${color};`;
}

const { primary, secondary } = colors;
const { mineShaft, grayNurse, doveGray } = primary;
const {
  gray,
  white,
  boulder,
  bittersweet,
  bostonBlue,
  chestnutRose,
  killarney,
  scienceBlue,
  webOrange,
} = secondary;

export const fontColorMineShaft = fontColor(mineShaft);
export const fontColorGrayNurse = fontColor(grayNurse);
export const fontColorDoveGray = fontColor(doveGray);
export const fontColorGray = fontColor(gray);
