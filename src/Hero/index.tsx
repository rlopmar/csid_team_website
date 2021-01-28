import { ReactElement } from 'react';
import styled from 'styled-components';
import 'next-images';
import { device } from 'global';

const Wrapper = styled.div`
  background-image: url('/Images/LandingPage.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 70px;
  padding-bottom: 50px;
  margin-top: -70px;
  z-index: 1 !important;
`;

const Main = styled.main`
  text-align: center;
  margin: 0 5vw;
`;

const H1 = styled.h1`
  margin-bottom: 0;
  color: white;
  text-shadow: 1px 2px black;
  -webkit-text-stroke: 0.5px black;
  padding-bottom: 0;
  word-break: break-word;
  font-size: 2rem;
  margin-bottom: 0px;

  @media${device.mobile} {
    font-size: 2.5rem;
  }

  @media${device.mobileL} {
    font-size: 3rem;
    margin-bottom: -25px;
  }
`;

const Section = styled.section`
  text-align: left;
  margin-top: 100px;
`;

const P = styled.p`
  margin-bottom: 0;
  margin-top: 0;
  color: white;
  text-shadow: 1px 2px black;
  word-break: break-word;
`;

const H3 = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  color: white;
  text-shadow: 1px 2px black;
  -webkit-text-stroke: 0.5px black;
  word-break: break-word;

  @media${device.mobile} {
    font-size: 2.5rem;
  }

  @media${device.mobileL} {
    font-size: 3rem;
  }
`;

export default function Hero(props): ReactElement {
  return (
    <Wrapper>
      <Main>
        <div>
          <H1>Innovate to make </H1>
          <H1 style={{ marginTop: 0 }}>your future safer</H1>

          <Section>
            <P>We are a team of</P>
            <H3>Customer Success Innovation Development</H3>
            <P>at SAP</P>
          </Section>
        </div>
      </Main>
      {/* <img src='/LandingPage.jpg' /> */}
    </Wrapper>
  );
}
