import React from 'react';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { colors } from 'global';
import { cards, CardInfo } from './focus';

const Card = styled.section`
  box-shadow: 0px 5px 15px rgb(0, 0, 0, 0.1);
  background-color: white !important;
  border-radius: 5px;
  width: auto;
  height: 130px;
  padding: 20px;
  margin: 10px;
`;

const CardTitle = styled.p`
  color: ${colors.primary.doveGray};
`;

const Img = styled.img`
  height: 60px;
  width: auto;
  padding-top: 10px;
  filter: hue-rotate(5deg) brightness(0.7);
`;

function renderFocusCards(cards: CardInfo[]): JSX.Element[] {
  return cards.map((card, index: number) => {
    return (
      <Slide index={index} key={card.title} style={{ padding: '20px 0' }}>
        <Card>
          <Img src={`/Icons/${card.icon}.svg`}></Img>
          <CardTitle className='s1'>{card.title}</CardTitle>
        </Card>
      </Slide>
    );
  });
}

export default function Carousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={10}
      naturalSlideHeight={1000}
      visibleSlides={1.75}
      step={1}
      infinite={true}
      totalSlides={cards.length}
      isIntrinsicHeight={true}
    >
      <Slider>{renderFocusCards(cards)}</Slider>

      {/* <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext> */}
    </CarouselProvider>
  );
}
