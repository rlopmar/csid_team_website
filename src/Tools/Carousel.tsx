import React from 'react';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide as slide,
  ButtonNext as buttonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { backgroundColors } from './slideColors';
import tools from './tools.json';
import useWindowDimensions from 'WindowDimensions';
import { calculateVisibleSlides } from './calculateVisibleSlides';
import { BiChevronRightCircle } from 'react-icons/bi';

const Container = styled.div`
  position: relative;
`;

const Slide = styled(slide)`
  position: relative !important;
  background-color: ${(props) => backgroundColors[props.index]};
  padding: 10px 20px;
  color: white;
  height: 450px !important;
`;

const SlideTitle = styled.h4`
  padding-bottom: 220px;
`;

const SlideDescription = styled.p`
  max-width: 90%;
  color: white;
  position: absolute;
  bottom: 90px;
`;

const SlideFooter = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
  transition: all 0.2s linear;

  &:hover {
    color: rgb(30, 30, 30);
  }
`;

const ButtonNext = styled(buttonNext)`
  height: 450px;
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

interface Slide {
  title: string;
  description: string;
  link: string;
}

function renderSlides(tools: Slide[]) {
  return tools.map((tool: Slide, index: number) => {
    return (
      <Slide index={index} key={tool.title}>
        <SlideTitle>{tool.title}</SlideTitle>
        <SlideDescription>{tool.description}</SlideDescription>
        <SlideFooter>
          <A href={tool.link} target='_blank'>
            Take a look →
          </A>
        </SlideFooter>
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
      <Container>
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

          <ButtonNext>
            <BiChevronRightCircle />
          </ButtonNext>
        </CarouselProvider>
      </Container>
    )
  );
}
