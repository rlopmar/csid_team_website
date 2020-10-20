import { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Link } from "components";

export default function HeaderLink(props: {
  href: string;
  target?: string;
  children?: ReactNode;
}): ReactElement {
  return (
    <StyledHeaderLink>
      <span>
        <Link {...props}>{props.children}</Link>
      </span>
    </StyledHeaderLink>
  );
}

const StyledHeaderLink = styled.div`
  display: flex;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;

  span {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }

  &:hover {
    background-color: grey;
    cursor: pointer;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);

    a::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;
