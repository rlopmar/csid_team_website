import styled from 'styled-components';

import { colors, device } from 'global';
import focusCards from './FocusCards';
import FocusCardsCarousel from './FocusCarousel';

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;

const Container = styled.div`
  padding-bottom: 50px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;

  @media${device.desktop} {
    max-width: 1600px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CarouselWrapper = styled.div`
  @media${device.mobileL} {
    display: none;
  }
`;

const CardsWrapper = styled.div`
  display: none;

  @media${device.mobileL} {
    display: block;
  }
`;

const Title = styled.h2`
  margin-bottom: 30px;
`;

export default function About() {
  return (
    <Wrapper id='focus'>
      <Title style={{ color: colors.primary.doveGray }}>We focus on</Title>

      <CarouselWrapper>
        <FocusCardsCarousel />
      </CarouselWrapper>

      <CardsWrapper>
        <Container>{focusCards({ withDescription: true })}</Container>
      </CardsWrapper>
    </Wrapper>
  );
}
