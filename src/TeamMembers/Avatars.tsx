import React from 'react';
import styled from 'styled-components';
import { Role } from './roles';
import { teamMembers, MembersInfo } from './teamMembers';
import ReactTooltip from 'react-tooltip';
import { device, colors } from 'global';
import AvatarTooltip from './AvatarTooltip';

export default function renderAvatars(role: Role, viewport: string) {
  const [activeTooltips, setActiveTooltips] = React.useState<boolean>(false);

  React.useEffect(() => {
    setActiveTooltips(true);

    return () => {
      setActiveTooltips(false);
    };
  }, []);

  return teamMembers[role.id].map((member: MembersInfo) => {
    return (
      <AvatarContainer key={member.name + '-avatar-circle-' + viewport}>
        <AvatarCropper
          data-tip='click'
          data-event='mouseenter click'
          data-event-off='mouseleave'
          data-for={member.name + '-' + viewport}
          // data-delay-hide={100}
        >
          <Avatar src={member.avatar} />
        </AvatarCropper>

        {activeTooltips && viewport !== 'mobile' && (
          <StyledTooltip
            id={member.name + '-' + viewport}
            place={viewport === 'mobile' ? 'right' : 'bottom'}
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
              style={{ pointerEvents: 'auto' }}
            >
              {AvatarTooltip(member)}
            </div>
          </StyledTooltip>
        )}
      </AvatarContainer>
    );
  });
}

const AvatarContainer = styled.div`
  @media${device.laptop} {
    width: 100px;
    position: relative;
    display: flex;
    justify-content: center;
    width: 50%;
    margin-bottom: 15px;
  }
`;

const AvatarCropper = styled.div`
  width: 94px;
  height: 94px;
  position: relative;
  overflow: hidden;
  margin: 10px 0px;
  border-radius: 50%;
  border-style: solid;
  border-width: 3px;
  border-color: white;
  transition: box-shadow 0.3s linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 40px #145697, 0 0 50px #075eaf;
    border-color: #075eaf;
  }
`;

const Avatar = styled.img`
  width: 94px;
  background-color: rgb(0, 0, 0, 0);
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  display: block;

  &:hover {
    transition: filter 0.3s linear;
    filter: brightness(1.2);
  }
`;

const StyledTooltip = styled(ReactTooltip)`
  z-index: 999 !important;
  position: fixed !important;

  &.show {
    z-index: 999 !important;
    position: fixed !important;
    visibility: visible;
    opacity: 1 !important;
    border-radius: 8px;
    min-width: 250px;
    padding: 0;
    border-width: 0;
    box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.4);
  }
`;
