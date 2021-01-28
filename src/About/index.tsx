import styled from 'styled-components';
import Map from './Map';
import TeamDescription from './TeamDescription';
import { device } from 'global';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px 20px;

  @media${device.laptop} {
    flex-direction: row;
  }

  @media${device.desktop} {
    width: 1600px;
    flex-direction: row;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function About() {
  return (
    <Container>
      <Map />
      <TeamDescription />
    </Container>
  );
}
