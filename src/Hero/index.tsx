import { ReactElement } from 'react';
import styled from 'styled-components';
import 'next-images';
import { device } from 'global';
import { Parallax } from 'react-parallax';

const Wrapper = styled.div`
  padding-top: 170px;
  padding-bottom: 50px;
  margin-top: -70px;
  z-index: 2;
`;

const Main = styled.main`
  text-align: center;
  margin: 0 5vw;
`;

const Slogan = styled.h1`
  margin-bottom: 0;
  color: white;
  text-shadow: 1px 2px black;
  -webkit-text-stroke: 0.5px black;
  padding-bottom: 0;
  word-break: break-word;
  margin-bottom: 0px;

  @media${device.mobile} {
  }

  @media${device.mobileL} {
    margin-bottom: -25px;
  }
`;

const Section = styled.section`
  text-align: left;
  margin-top: 100px;
`;

const P = styled.h6`
  margin-bottom: 0;
  margin-top: 0;
  color: white;
  text-shadow: 1px 2px black;
  word-break: break-word;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: white;
  text-shadow: 1px 1px black;
  -webkit-text-stroke: 0.4px black;
  word-break: break-word;
`;

export default function Hero(): ReactElement {
  return (
    <Parallax
      bgImage={'/Images/LandingPage.jpg'}
      style={{
        marginTop: '-70px',
        paddingBottom: '70px',
        zIndex: '-1',
      }}
    >
      <Wrapper id='hero'>
        <Main>
          <div>
            <Slogan>Innovate to make </Slogan>
            <Slogan style={{ marginTop: 0 }}>your future safer</Slogan>

            <Section>
              <P>We are a team of</P>
              <Title>Customer Success Innovation Development</Title>
              <P>at SAP</P>
            </Section>
          </div>
        </Main>
      </Wrapper>
    </Parallax>
  );
}
