import styled from 'styled-components';
import { device } from 'global';

const Img = styled.img`
  position: relative;
  display: block;
  width: 50%;
  max-width: calc(100vw);
  min-width: 360px !important;
  max-width: 500px !important;
  padding-left: 20%;
  z-index: -1;
  margin-left: 0;
  padding-left: 0;

  @media${device.tablet} {
    position: absolute;
    left: 0;
    padding-left: 10%;
    width: 50%;
  }

  @media${device.desktop} {
    position: absolute;
    padding-left: 20%;
    left: 0;
    width: 50%;
  }
`;

export default function Map() {
  return <Img src='/Images/Europe Map.png'></Img>;
}
