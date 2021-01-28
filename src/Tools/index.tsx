import styled from 'styled-components';
import { colors } from 'global';
import Carousel from './Carousel';

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  background-color: ${colors.primary.mineShaft};
  padding: 50px;
`;

const H1 = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
`;

const P = styled.p`
  color: white;
  font-size: 1.2rem;
`;

export default function Tools() {
  return (
    <Container>
      <Header>
        <H1>Our tools</H1>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </P>
      </Header>
      <Carousel />
    </Container>
  );
}
