import React from 'react';
import styled from 'styled-components';
import { device } from 'global';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 600px;

  @media${device.tablet} {
    padding-left: 40%;
    padding-right: 20px;
  }

  @media${device.laptopL} {
    padding-right: 20vw;
  }
`;

const P = styled.p`
  line-height: 1.5;
`;

export default function TeamDescription() {
  return (
    <Wrapper>
      <P>
        Delivery Unit under IES Customer Experience: Customer Engagement
        Solutions. Customer Success Innovation Development Team, is connecting
        people, technology and innovation on our journey as part of SAP´s
        transformation to become a best-run business and the role model of an
        Intelligent Enterprise.​ With focus on the success of our internal
        customers, we drive all aspects of innovation, mobile experience,
        intelligent technologies, platforms, data technology, architecture and
        engineering tools, across all SAP.
      </P>
      <P>
        Young and talented team, located in Germany (St. Leon-Rot) and Spain
        (Barcelona/Madrid), organize to work together to achieve organization
        goals. Right combination of knowledge, talents and abilities creating a
        great synergy and great team spirit where creativity, communication,
        collaborative and positive participation gives the correct ingredients
        of the team culture.
      </P>
    </Wrapper>
  );
}
