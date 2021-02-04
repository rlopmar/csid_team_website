import styled from 'styled-components';
import { colors, device } from 'global';

const Container = styled.div`
  padding-bottom: 50px;
`;

const Title = styled.h2`
  color: ${colors.primary.doveGray};
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 50px;

  @media${device.tablet} {
    flex-direction: column;
    padding-left: 10%;
  }

  @media${device.laptop} {
    flex-direction: row;
  }

  @media${device.laptop} {
    padding-left: 15%;
    padding-right: 15%;
  }
`;

const ContactInformation = styled.p`
  @media${device.laptop} {
    width: 50%;
  }
`;

const Positions = styled.ul`
  padding-left: 0;

  @media${device.laptop} {
    width: 50%;
    padding-left: 50px;
  }
`;

const Position = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const PositionName = styled.h6`
  font-weight: 600;
  color: ${colors.secondary.boulder};
  margin-top: 0;
  margin-bottom: 0;
`;

const PositionDetails = styled.h6`
  margin-top: 0;
  margin-bottom: 0;
`;

const ApplyButton = styled.button`
  position: absolute;
  left: 250px;
  top: 20px;
  padding: 5px 40px;
  border-radius: 5px;
  background-color: rgb(0, 0, 0, 0);
  border-style: solid;
  border-color: ${colors.secondary.scienceBlue};
  border-width: 1px;
  color: ${colors.secondary.scienceBlue};
  cursor: pointer;

  &:hover {
    color: white;
  }

  &:hover:after {
    transform: scaleY(1);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom center;
    background: ${colors.secondary.scienceBlue};
    z-index: -1;
    transition: transform 0.6s;
  }
`;

const Li = styled.li`
  list-style: none;
`;

export default function Career() {
  return (
    <Container id='career'>
      <Title>Do you want to join CSID team?</Title>
      <Wrapper>
        <ContactInformation>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          <br />
          <br />
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet!
          <br />
          <br />
          Contact us at <strong>team-csid@sap.com</strong>
        </ContactInformation>
        <Positions>
          <Li>
            <Position>
              <PositionName>Cloud Architect</PositionName>
              <PositionDetails>
                St. Leon Rot <br />
                Posted on: 15.07.2020
              </PositionDetails>
              <ApplyButton className='s1'>Apply</ApplyButton>
            </Position>
          </Li>
          <Li>
            <Position>
              <PositionName>Project Consultant</PositionName>
              <PositionDetails>
                St. Leon Rot <br />
                Posted on: 01.07.2020
              </PositionDetails>
              <ApplyButton className='s1'>Apply</ApplyButton>
            </Position>
          </Li>
          <Li>
            <Position>
              <PositionName>10x Developer</PositionName>
              <PositionDetails>
                St. Leon Rot <br />
                Posted on: 29.01.2021
              </PositionDetails>
              <ApplyButton className='s1'>Apply</ApplyButton>
            </Position>
          </Li>
        </Positions>
      </Wrapper>
    </Container>
  );
}
