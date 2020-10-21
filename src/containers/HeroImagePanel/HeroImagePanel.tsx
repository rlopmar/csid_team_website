import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

export default function HeroImagePanel(props: {
  children?: ReactNode;
  imgSrc: string;
}): ReactElement {
  return (
    <>
      <StyledHeroImagePanel {...props}>{props.children}</StyledHeroImagePanel>
    </>
  );
}

const StyledHeroImagePanel = styled.div`
  position: relative;
  display: flex;
  height: 800px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url(${(props) =>
      props.imgSrc ? props.imgSrc : "http://placehold.it/1400x900"});
  background-repeat: no-repeat;
  background-position: center;
`;
