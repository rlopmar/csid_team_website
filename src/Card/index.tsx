import styled from 'styled-components';
import { device } from 'global';

const Wrapper = styled.div`
  position: relative;
  box-shadow: 0px 0px 50px rgb(0, 0, 0, 0.05), 0px 15px 15px rgb(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 5px;
  min-width: 200px;
  padding: 20px;
  margin: 10px 10px;
  width: 100%;

  @media${device.mobileL} {
    width: 250px;
    min-width: 200px;
    margin: 20px 10px;
  }

  @media${device.laptop} {
    margin: 20px 10px;
  }
`;

export default function Card(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
