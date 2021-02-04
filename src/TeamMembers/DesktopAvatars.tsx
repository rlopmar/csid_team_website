import React from 'react';
import styled from 'styled-components';
import { roles as ROLES } from './roles';
import Avatars from './Avatars';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  width: 25% !important;
`;

const Img = styled.img`
  height: 180px !important;
  max-height: 180px !important;
`;

const Label = styled.h6`
  text-align: center;
  color: white;
  font-weight: bold;
`;

function renderRoles(roles: typeof ROLES) {
  return (
    <Container>
      {roles.map((role) => {
        return (
          <Column key={role.name}>
            <Img src={role.img} />
            <Label>{role.name}</Label>
          </Column>
        );
      })}
    </Container>
  );
}

export default function DesktopAvatars() {
  return (
    <div>
      {renderRoles(ROLES)}
      <Avatars />
    </div>
  );
}
