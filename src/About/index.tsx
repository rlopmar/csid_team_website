import styled from 'styled-components';
import Map from './Map';
import TeamDescription from './TeamDescription';
import { device } from 'global';

const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 20px;
  padding-bottom: 50px;

  @media${device.laptop} {
    flex-direction: row;
  }

  @media${device.desktop} {
    max-width: 1600px;
    flex-direction: row;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function About() {
  return (
    <Container id='about'>
      <Map />
      <TeamDescription />
    </Container>
  );
}
