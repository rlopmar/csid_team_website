import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export default function Link(props: {
  href: string;
  target?: string;
  children?: ReactNode;
}): ReactElement {
  return <StyledLink {...props}>{props.children}</StyledLink>;
}

const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  position: relative;
  margin-bottom: 2px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
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
