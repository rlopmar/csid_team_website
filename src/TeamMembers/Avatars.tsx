import React from 'react';
import styled from 'styled-components';
import { roles } from './roles';
import { teamMembers } from './teamMembers';
import ReactTooltip from 'react-tooltip';
import { colors } from 'global';
import AvatarTooltip from './AvatarTooltip';

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

const Anchor = styled.a``;

const Avatars = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  flex-wrap: wrap;
`;

const AvatarCropper = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  overflow: hidden;
  margin: 10px 10px;
  border-radius: 50%;
  border-style: solid;
  border-width: 3px;
  border-color: white;
`;

const Avatar = styled.img`
  width: 80px;
  background-color: rgb(0, 0, 0, 0);
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  display: block;

  &:hover {
    filter: brightness(0.9);
  }
`;

const StyledTooltip = styled(ReactTooltip)`
  &.show {
    opacity: 1 !important;
    border-radius: 8px;
    min-width: 250px;
    padding: 0;
    border-width: 0;
    box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.4);
  }
`;

export default function renderAvatars() {
  const [activeTooltips, setActiveTooltips] = React.useState<boolean>(false);
  // const [activeAvatar, setActiveAvatar] = React.useState<string>(
  //   'Sagar the Wizard'
  // );

  React.useEffect(() => {
    setActiveTooltips(true);

    return () => setActiveTooltips(false);
  }, []);

  return (
    <Container>
      {roles.map((role) => {
        return (
          <Column key={role.name + '-avatars'}>
            <Avatars>
              {teamMembers[role.id].map((member) => {
                return (
                  <div
                    style={{ position: 'relative' }}
                    key={member.name + '-avatar-circle'}
                  >
                    <div>
                      <AvatarCropper
                        data-event='click'
                        data-tip
                        data-for={member.name}
                      >
                        <Avatar src={member.avatar} />
                      </AvatarCropper>

                      {activeTooltips && (
                        <StyledTooltip
                          id={member.name}
                          place='bottom'
                          effect='solid'
                          backgroundColor='rgb(255,255,255, 1)'
                          textColor={colors.secondary.boulder}
                          clickable={true}
                          globalEventOff='click'
                          isCapture
                        >
                          <div
                            onClick={(e) => e.stopPropagation()}
                            style={{ pointerEvents: 'auto', overflowY: 'auto' }}
                          >
                            {AvatarTooltip(member, role)}
                          </div>
                        </StyledTooltip>
                      )}
                    </div>
                  </div>
                );
              })}
            </Avatars>
          </Column>
        );
      })}
    </Container>
  );
}