import styled from 'styled-components';
import { device } from 'global/index';

const Container = styled.div`
  margin: 0 10px;

  @media${device.mobileL} {
    margin: 0 10px;
  }

  @media${device.tablet} {
    margin: 0 8vw;
  }

  @media${device.desktop} {
    margin: 0 10vw;
  }

  @media${device.desktopL} {
    margin: 0 15vw;
  }
`;

export default function Body(props) {
  return <Container>{props.children}</Container>;
}
