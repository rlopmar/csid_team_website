import styled from 'styled-components';
import Map from './Map';
import TeamDescription from './TeamDescription';
import { colors } from 'global';

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 20px;
  padding-bottom: 50px;
`;

const Title = styled.h2`
  color: ${colors.primary.doveGray};
  margin-bottom: 0px;
  text-align: center;
`;

export default function About() {
  return (
    <Container id='about'>
      <Title>CSID Team</Title>
      <Map />
      <TeamDescription />
    </Container>
  );
}
