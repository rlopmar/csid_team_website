import styled from 'styled-components';
import { colors } from 'global';

const Wrapper = styled.div`
  background-color: ${colors.primary.mineShaft};
  width: 100%;
  height: 70px;
`;

const Team = styled.p`
  color: white;
  text-align: center;
  padding-top: 20px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Team>
        <strong>@CSID Team | SAP</strong>
      </Team>
    </Wrapper>
  );
}
