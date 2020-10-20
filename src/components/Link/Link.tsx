import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export default function link(props: {
  href: string;
  target?: string;
  children?: ReactNode;
}): ReactElement {
  return (
    <div>
      <StyledLink {...props}>{props.children}</StyledLink>
    </div>
  );
}

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover {
    color: inherit;
    opacity: 0.8;

    &::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }

  &:active: {
    color: inherit;
    opacity: 0.8;
  }
`;
