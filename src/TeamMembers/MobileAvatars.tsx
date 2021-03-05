import React from 'react';
import styled from 'styled-components';
import {
  CarouselProvider,
  Slider as slider,
  Slide as slide,
} from 'pure-react-carousel';
import ROLES from './roles';
import { teamMembers } from './teamMembers';
import { Role } from './roles';
import Avatars from './Avatars';
import useWindowDimensions from 'WindowDimensions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Slider = styled(slider)`
  width: 100% !important;
`;

const Slide = styled(slide)``;

const Img = styled.img`
  width: 120px;
  padding: 0 20px;
  margin-bottom: 30px;
`;

function renderRows(roles: typeof ROLES, width: number) {
  return roles.map((role) => {
    const members = teamMembers[role.id];

    return (
      <CarouselProvider
        visibleSlides={Math.floor(width / 120)}
        naturalSlideWidth={100}
        naturalSlideHeight={9999}
        totalSlides={members.length + 1}
        infinite={true}
        dragEnabled={true}
        touchEnabled={true}
        isIntrinsicHeight={true}
        key={role.id + '-carousel'}
      >
        <Slider>
          <Slide index={0} style={{ marginRight: '50px' }}>
            <Img src={role.img} />
          </Slide>
          {renderRoleMembers(role)}
        </Slider>
      </CarouselProvider>
    );
  });
}

function renderRoleMembers(role: Role) {
  return Avatars(role, 'mobile').map((avatar, index) => (
    <Slide
      onClick={() => {}}
      index={index + 1}
      key={role.name + '-mobile-avatar-' + (index + 1)}
    >
      {avatar}
    </Slide>
  ));
}

export default function MobileAvatars(roles: typeof ROLES) {
  const width = useWindowDimensions().width;

  return <Container>{renderRows(roles, width)}</Container>;
}
