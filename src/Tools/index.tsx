import styled from 'styled-components';
import { colors } from 'global';
import Carousel from './Carousel';

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary.mineShaft};
  padding: 20px 10vw 50px 10vw;
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

const MaxWidth = styled.div`
  max-width: 800px;
`;

const P = styled.p`
  color: white;
  text-align: center;
`;

export default function Tools() {
  return (
    <Container id='our work'>
      <Header>
        <Title>Our tools</Title>
        <MaxWidth>
          <P>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </P>
        </MaxWidth>
      </Header>
      <Carousel />
    </Container>
  );
}
