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

  @media${device.mobileL} {
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
  line-height: 1.5;

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
  font-size: 100%;
  color: ${colors.secondary.boulder};
  margin-top: 0;
  margin-bottom: 10px;
  max-width: 300px;
`;

const PositionDetails = styled.h6`
  margin-top: 0;
  margin-bottom: 0;
`;

const ApplyButton = styled.button`
  position: relative;
  padding: 5px 40px;
  border-radius: 5px;
  background-color: rgb(0, 0, 0, 0);
  border-style: solid;
  border-color: ${colors.secondary.scienceBlue};
  border-width: 1px;
  color: ${colors.secondary.scienceBlue};
  cursor: pointer;
  margin-top: 10px;

  @media${device.mobileL} {
    position: absolute;
    top: 20px;
    left: 350px;
  }

  @media${device.tablet} {
    left: 320px;
  }

  &:disabled {
    background-color: gray;
    color: white;
    cursor: not-allowed;
    border-color: gray;
  }

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
          We are offering a one-stop experience from an idea to the Go-Live of a
          product. As part of the Customer Success Innovation Development Team,
          you will be working in an international team with contacts to the
          delivery units of the Customer Success Group and many other SAP units,
          such as T&I, GCO, GBO, ID&A and SAP Global IT.
          <br />
          <br />
          For cloud solutions, the requirement to ensuring customer success is
          key.
          <br />
          <br />
          Customers expect ongoing guidance for adopting new configuration and
          usage of all their cloud solutions considering the constant stream of
          innovation potential coming from SAP in quarterly releases.
          <br />
          <br />
          To serve our customers effectively and efficiently we are aiming to
          increase delivery capabilities by intelligent tools.
          <br />
          <br />
          These tools are using all of SAP’s innovations, such as Machine
          Learning, Fiori, Cloud Application Programming Model (CAP) on Node.js
          and are built on SAP Cloud Platform or SAP’s internal Infrastructure.
        </ContactInformation>
        <Positions>
          <Li>
            <Position>
              <PositionName>
                Working Student (f/m/d) within a team of Project Managers and
                Development team
              </PositionName>
              <PositionDetails>
                St. Leon Rot <br />
                Posted on: 01.03.2021
              </PositionDetails>
              <ApplyButton className='s1' disabled>
                Apply
              </ApplyButton>
            </Position>
          </Li>
          <Li>
            <Position>
              <PositionName>
                Working Student (f/m/d): team Project Management and Development
                - Intelligent Enterprise Solutions
              </PositionName>
              <PositionDetails>
                St. Leon Rot <br />
                Posted on: 01.07.2020
              </PositionDetails>
              <ApplyButton className='s1' disabled>
                Apply
              </ApplyButton>
            </Position>
          </Li>
        </Positions>
      </Wrapper>
    </Container>
  );
}
