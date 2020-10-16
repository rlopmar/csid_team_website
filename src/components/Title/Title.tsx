import { ReactElement } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "10px")};
  &:hover {
    color: red;
  }
`;

export default function Header(props): ReactElement {
  return (
    <div>
      <Title {...props}>{props.children}</Title>
    </div>
  );
}
