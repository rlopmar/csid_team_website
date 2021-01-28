import React from 'react';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide as slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { backgroundColors } from './slideColors';
import tools from './tools.json';
import useWindowDimensions from 'WindowDimensions';

const Slide = styled(slide)`
  position: relative !important;
  background-color: ${(props) => backgroundColors[props.index]};
  padding: 10px 20px;
  color: white;
`;

const SlideTitle = styled.h3`
  font-size: 2rem;
`;

const SlideDescription = styled.p`
  padding-bottom: 200px;
  font-size: 1.2rem;
  max-width: 90%;
`;

const SlideFooter = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
`;

interface Slide {
  title: string;
  description: string;
}

function calculateVisibleSlides(windowWidth: number): number {
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

function renderSlides(tools: Slide[]) {
  return tools.map((tool: Slide, index: number) => {
    return (
      <Slide index={index} key={tool.title}>
        <SlideTitle>{tool.title}</SlideTitle>
        <SlideDescription>{tool.description}</SlideDescription>
        <SlideFooter>Take a look ➡️</SlideFooter>
      </Slide>
    );
  });
}

export default function Carousel() {
  const width = useWindowDimensions().width;
  if (!width) return <React.Fragment></React.Fragment>;
  return (
    <CarouselProvider
      naturalSlideWidth={10}
      naturalSlideHeight={1000}
      visibleSlides={calculateVisibleSlides(width)}
      step={1}
      infinite={true}
      totalSlides={tools.length}
      isIntrinsicHeight={true}
    >
      <Slider>{renderSlides(tools)}</Slider>

      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}
