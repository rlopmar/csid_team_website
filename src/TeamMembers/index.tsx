import styled from 'styled-components';
import { device } from 'global';

import DesktopAvatars from './DesktopAvatars';
import MobileAvatars from './MobileAvatars';
import Manager from './Manager';

const Container = styled.section`
  background-color: #3b3b3b;
  padding: 50px 10vw;
`;

const Title = styled.h2`
  color: white;
  text-align: center;
`;

const Mobile = styled.div`
  display: block;

  @media${device.laptop} {
    display: none;
  }
`;

const Desktop = styled.div`
  display: none;

  @media${device.laptop} {
    display: block;
  }
`;

export default function TeamMembers() {
  return (
    <Container id='team'>
      <Title>We are a team of</Title>
      <Desktop>
        <DesktopAvatars />
      </Desktop>
      <Mobile>
        <MobileAvatars />
      </Mobile>
      <Manager />
    </Container>
  );
}
