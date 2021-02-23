import React from 'react';
import styled from 'styled-components';
import ROLES from './roles';
import Avatars from './Avatars';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
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
  margin-bottom: 70px;
`;

const AvatarsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
  flex-wrap: wrap;
`;

function renderRoles(roles: typeof ROLES) {
  return (
    <Container>
      {roles.map((role) => {
        return (
          <Column key={role.name}>
            <Img src={role.img} />
            <Label
              style={{
                marginBottom: role.id === 'productOwners' ? '46px' : null,
              }}
            >
              {role.name}
            </Label>
            <AvatarsContainer>{Avatars(role, 'desktop')}</AvatarsContainer>
          </Column>
        );
      })}
    </Container>
  );
}

export default function DesktopAvatars(roles: typeof ROLES) {
  return <div>{renderRoles(roles)}</div>;
}
