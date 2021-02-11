import tools from './tools.json';

export function calculateVisibleSlides(windowWidth: number): number {
  const slidesWidth = 500;
  const oneSlide = 1.1;
  const totalNumberOfSlides = tools.length;
  const minNumberOfSlides = Math.max(windowWidth / slidesWidth, oneSlide);
  const maxNumberOfSlides = Math.min(
    windowWidth / slidesWidth,
    totalNumberOfSlides
  );

  const visibleSlides =
    windowWidth / slidesWidth < oneSlide
      ? minNumberOfSlides
      : maxNumberOfSlides;

  return visibleSlides;
}
