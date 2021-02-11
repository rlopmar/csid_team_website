import styled from 'styled-components';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import ROLES from './roles';
import { teamMembers } from './teamMembers';
import { Role } from './roles';
import Avatars from './Avatars';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function renderRows(roles: typeof ROLES) {
  return roles.map((role, index) => {
    const members = teamMembers[role.id];
    return (
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={100}
        totalSlides={members.length}
        isIntrinsicHeight={true}
        step={1}
        infinite={true}
        key={role.id + '-carousel'}
      >
        <Slider>{renderRoleMembers(role, index)}</Slider>
      </CarouselProvider>
    );
  });
}

function renderRoleMembers(role: Role, index: number) {
  return <Slide index={index}>{Avatars(role, 'mobile')}</Slide>;
}

export default function MobileAvatars() {
  return <Container>{renderRows(ROLES)}</Container>;
}
