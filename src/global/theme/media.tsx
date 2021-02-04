import { device } from 'global';

type Params = string[];

export function media(mediaQuery: string, ...params: Params) {
  return `@media${mediaQuery}{
    ${params.join('\n')}
  }`;
}

export const mobile = media.bind(null, device.mobile);
export const mobileL = media.bind(null, device.mobileL);
export const tablet = media.bind(null, device.tablet);
export const laptop = media.bind(null, device.laptop);
export const laptopL = media.bind(null, device.laptopL);
export const desktop = media.bind(null, device.desktop);
export const desktopL = media.bind(null, device.desktopL);
