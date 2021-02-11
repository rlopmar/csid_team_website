import React from 'react';
import styled from 'styled-components';
import { Role } from './roles';
import { teamMembers } from './teamMembers';
import ReactTooltip from 'react-tooltip';
import { device, colors } from 'global';
import AvatarTooltip from './AvatarTooltip';

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;

const Container = styled.section`
  display: flex;
  flex-direction: row;

  @media${device.laptop} {
    display: flex;
    flex-direction: column;
    width: 100% !important;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Avatars = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-left: 5px;
  color: white;
  flex-wrap: wrap;
`;

const AvatarContainer = styled.div`
  position: relative;

  @media${device.laptop} {
    width: 50%;
  }
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
    transition: filter 0.5s linear;
    filter: brightness(1.2);
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

export default function renderAvatars(role: Role, viewport: string) {
  const [activeTooltips, setActiveTooltips] = React.useState<boolean>(false);

  React.useEffect(() => {
    setActiveTooltips(true);

    return () => setActiveTooltips(false);
  }, []);

  return (
    <Container key={role.name + '-avatars'}>
      <Avatars>
        {teamMembers[role.id].map((member) => {
          return (
            <AvatarContainer key={member.name + '-avatar-circle-' + viewport}>
              <AvatarCropper
                data-tip='click'
                data-event='mouseenter click'
                data-event-off='mouseleave'
                data-for={member.name + '-' + viewport}
                data-delay-hide={200}
              >
                <Avatar src={member.avatar} />
              </AvatarCropper>

              {activeTooltips && (
                <StyledTooltip
                  id={member.name + '-' + viewport}
                  place='bottom'
                  effect='solid'
                  backgroundColor='rgb(255,255,255, 1)'
                  textColor={colors.secondary.boulder}
                  clickable={true}
                  globalEventOff='click'
                  isCapture
                >
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    style={{ pointerEvents: 'auto', overflowY: 'auto' }}
                  >
                    {AvatarTooltip(member, role)}
                  </div>
                </StyledTooltip>
              )}
            </AvatarContainer>
          );
        })}
      </Avatars>
    </Container>
  );
}
