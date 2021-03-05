import React from 'react';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide as slide,
  ButtonNext as buttonNext,
  ButtonBack as buttonBack,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { backgroundColors } from './slideColors';
import tools from './tools.json';
import useWindowDimensions from 'WindowDimensions';
import { calculateVisibleSlides } from './calculateVisibleSlides';
import { BiChevronRightCircle, BiChevronLeftCircle } from 'react-icons/bi';

export default function Carousel() {
  const [render, setRender] = React.useState<boolean>(false);
  const [showingPreview, setShowingPreview] = React.useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const width = useWindowDimensions().width;

  React.useEffect(() => {
    setRender(true);

    return () => setRender(false);
  }, []);

  if (!width) return <React.Fragment></React.Fragment>;

  return (
    render && (
      <Container>
        <CarouselProvider
          naturalSlideWidth={1000}
          naturalSlideHeight={100}
          visibleSlides={showingPreview ? calculateVisibleSlides(width) : 1}
          step={1}
          infinite={true}
          totalSlides={tools.length}
          isIntrinsicHeight={true}
          currentSlide={currentSlide}
        >
          <Slider>
            {renderSlides(
              tools,
              setCurrentSlide,
              showingPreview,
              setShowingPreview
            )}
          </Slider>

          <ButtonBack>
            <BiChevronLeftCircle />
          </ButtonBack>
          <ButtonNext>
            <BiChevronRightCircle />
          </ButtonNext>
        </CarouselProvider>
      </Container>
    )
  );
}

const Container = styled.div`
  position: relative;
`;

const ButtonNext = styled(buttonNext)`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  width: 85px;
  transition: all 0.2s linear;
  background-color: rgb(255, 255, 255, 0);
  outline: none;
  font-size: 70px;
  color: white;
  padding: 0 auto;

  &:hover {
    background-color: rgb(255, 255, 255, 0.15);
  }
`;

const ButtonBack = styled(buttonBack)`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  width: 85px;
  transition: all 0.2s linear;
  background-color: rgb(255, 255, 255, 0);
  outline: none;
  font-size: 70px;
  color: white;
  padding: 0 auto;

  &:hover {
    background-color: rgb(255, 255, 255, 0.15);
  }
`;

interface Slide {
  title: string;
  description: string;
  link: string;
}

function renderSlides(
  tools: Slide[],
  setCurrentSlide: any,
  showingPreview: boolean,
  setShowingPreview: any
) {
  return tools.map((tool: Slide, index: number) => {
    return (
      <Slide index={index} key={tool.title}>
        {showingPreview
          ? renderToolPreview(
              tool,
              index,
              setCurrentSlide,
              showingPreview,
              setShowingPreview
            )
          : renderToolInformation(
              tool,
              index,
              setCurrentSlide,
              showingPreview,
              setShowingPreview
            )}
      </Slide>
    );
  });
}

const Slide = styled(slide)`
  position: relative !important;
  background-color: ${(props) => backgroundColors[props.index]};
  padding: 10px 20px;
  color: white;
  min-height: 450px !important;
`;

function renderToolPreview(
  tool: Slide,
  slideNumber: number,
  setCurrentSlide: any,
  showingPreview: boolean,
  setShowingPreview: any
) {
  return (
    <>
      <SlideTitle>{tool.title}</SlideTitle>
      <SlideFooter>
        <A
          onClick={() => {
            setShowingPreview(!showingPreview);
            setCurrentSlide(slideNumber);
          }}
        >
          Take a look →
        </A>
      </SlideFooter>
    </>
  );
}

const SlideTitle = styled.h4`
  padding-bottom: 100px;
`;

const SlideFooter = styled.div``;

const A = styled.a`
  text-decoration: none;
  color: white;
  transition: all 0.2s linear;
  cursor: pointer;

  position: absolute;
  right: 40px;
  bottom: 40px;

  &:hover {
    color: rgb(30, 30, 30);
  }
`;

function renderToolInformation(
  tool: Slide,
  slideNumber: number,
  setCurrentSlide: any,
  showingPreview: boolean,
  setShowingPreview: any
) {
  return (
    <Wrapper>
      <SlideTitle>{tool.title}</SlideTitle>
      <SlideDescription>{tool.description}</SlideDescription>
      <SlideFooter>
        <A
          style={{
            right: '100px',
          }}
          onClick={() => {
            setShowingPreview(!showingPreview);
            setCurrentSlide(0);
          }}
        >
          ← preview mode
        </A>
      </SlideFooter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 800px;
`;

const SlideDescription = styled.h6`
  max-width: 70%;
  color: white;
  position: relative;
`;
