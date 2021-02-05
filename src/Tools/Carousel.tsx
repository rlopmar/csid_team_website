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
import { calculateVisibleSlides } from './calculateSlides';

const Slide = styled(slide)`
  position: relative !important;
  background-color: ${(props) => backgroundColors[props.index]};
  padding: 10px 20px;
  color: white;
`;

const SlideTitle = styled.h4`
  padding-bottom: 220px;
`;

const SlideDescription = styled.p`
  // padding-bottom: 220px;
  max-width: 90%;
  color: white;
  position: absolute;
  bottom: 120px;
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

// this shitty Render trick is just to avoid problems
// with Next.js SSR
export default function Carousel() {
  const [render, setRender] = React.useState<boolean>(false);
  const width = useWindowDimensions().width;

  React.useEffect(() => {
    setRender(true);

    return () => setRender(false);
  }, []);

  if (!width) return <React.Fragment></React.Fragment>;

  return (
    render && (
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
    )
  );
}
