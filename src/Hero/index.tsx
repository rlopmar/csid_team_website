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
  text-shadow: 0px 0px 30px rgb(30, 30, 30, 0.6), 0 0 10px rgb(30, 30, 30, 0.4);
  -webkit-text-stroke: 0.2px black;
  word-break: break-word;
  color: white;
  margin-top: 350px;
  margin-bottom: 0;
  padding-bottom: 40px;
  margin-bottom: 0px;
  font-weight: bolder;

  @media${device.mobile} {
  }

  @media${device.mobileL} {
    margin-bottom: -25px;
  }
`;

const SubSlogan = styled.h4`
  margin-bottom: 0;
  color: white;
  text-shadow: 0px 0px 30px rgb(30, 30, 30, 0.6), 0 0 10px rgb(30, 30, 30, 0.4);
  -webkit-text-stroke: 0.2px black;
  padding-bottom: 0;
  word-break: break-word;
  margin-bottom: 0px;
  font-weight: bold;
`;

const Section = styled.section`
  text-align: left;
  margin-top: 80px;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: -5px;
  color: white;
  text-shadow: 0px 0px 30px rgb(30, 30, 30, 0.6), 0 0 10px rgb(30, 30, 30, 0.4);
  -webkit-text-stroke: 0.4px black;
  word-break: break-word;
`;

const Subtitle = styled.h5`
  color: white;
  word-break: break-word;
  text-shadow: 0px 0px 30px rgb(30, 30, 30, 0.6), 0 0 10px rgb(30, 30, 30, 0.4);
  margin-bottom: 0;
  margin-top: 0;
`;

const Highlight = styled.span`
  color: #2e84d8;
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
            <Slogan>
              <Highlight>Innovation</Highlight> = Idea + Leader + Team + Plan{' '}
            </Slogan>
            <SubSlogan style={{ marginTop: 0 }}>
              It's not about ideas, it is about{' '}
              <Highlight>making ideas happen</Highlight>
            </SubSlogan>

            <Section>
              <Subtitle>We are a team of</Subtitle>
              <Title>Customer Success Innovation Development</Title>
              <Subtitle>at SAP</Subtitle>
            </Section>
          </div>
        </Main>
      </Wrapper>
    </Parallax>
  );
}
