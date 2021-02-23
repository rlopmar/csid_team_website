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
  max-width: 900px;
`;

const P = styled.p`
  color: white;
  text-align: center;
  line-height: 1.5;
`;

export default function Tools() {
  return (
    <Container id='our work'>
      <Header>
        <Title>Our tools</Title>
        <MaxWidth>
          <P>
            We provide best-in-class tools for Customer Success. Our tools are
            driving better business outcomes for our customers through
            intelligently guided adoption & usage of SAP’s cloud solution
            portfolio. Automation we provide is enabling efficient delivery for
            SAP’s customer success front-office and expert roles. We are
            currently development Intelligent tools using all SAP’s innovations,
            such as Fiori, Cloud Application Programming Model (CAP) on Node.js
            and are built on SAP Cloud Platform or SAP’s internal Infrastructure
            like Service Delivery Center (SDC) or Usage Analyzer (UA).
          </P>
        </MaxWidth>
      </Header>
      <Carousel />
    </Container>
  );
}
