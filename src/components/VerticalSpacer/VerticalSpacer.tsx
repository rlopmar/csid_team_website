import { ReactElement } from "react";
import styled from "styled-components";
import { device, margins } from "global";

const StyledVerticalSpacer = styled.div`
  height: ${(props) => margins.mobile[props.level]};

  @media ${device.mobileL} {
    height: ${(props) => margins.mobileL[props.level]};
  }

  @media ${device.tablet} {
    height: ${(props) => margins.tablet[props.level]};
  }

  @media ${device.laptop} {
    height: ${(props) => margins.laptop[props.level]};
  }

  @media ${device.laptopL} {
    height: ${(props) => margins.laptopL[props.level]};
  }
  @media ${device.desktop} {
    height: ${(props) => margins.desktop[props.level]};
  }

  @media ${device.desktopL} {
    height: ${(props) => margins.desktopL[props.level]};
  }
`;

export default function VerticalSpacer(props: {
  children?: React.ReactNode;
  level: string;
}): ReactElement {
  return (
    <div>
      <StyledVerticalSpacer {...props}>{props.children}</StyledVerticalSpacer>
    </div>
  );
}
