import { ReactElement } from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "10px")};
  &:hover {
    color: red;
  }
`;

export default function Title(props: {
  children?: React.ReactNode;
  fontSize?: string;
}): ReactElement {
  return (
    <div>
      <StyledTitle {...props}>{props.children}</StyledTitle>
    </div>
  );
}
