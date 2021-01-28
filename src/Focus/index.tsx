import styled from 'styled-components';

import { colors, device } from 'global';
import focusCards from './FocusCards';
import FocusCardsCarousel from './FocusCarousel';

const Wrapper = styled.div`
  text-align: center;
`;

const Container = styled.div`
  padding-bottom: 50px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;

  @media${device.desktop} {
    width: 1600px;
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

const H3 = styled.h3`
  margin-bottom: 30px;
`;

export default function About() {
  return (
    <Wrapper>
      <H3 style={{ color: colors.secondary.boulder }}>We focus on</H3>

      <CarouselWrapper>
        <FocusCardsCarousel />
      </CarouselWrapper>

      <CardsWrapper>
        <Container>{focusCards({ withDescription: true })}</Container>
      </CardsWrapper>
    </Wrapper>
  );
}
