import { ReactElement } from "react";
import styled from "styled-components";
import { VerticalSpacer, Link, HeaderLink } from "components";
import { HeroImagePanel } from "containers";

export default function Test(props): ReactElement {
  return (
    <div>
      <main>
        <TestHeaderBarContainer>
          <HeaderLink href="https://google.com">Home</HeaderLink>
          <HeaderLink href="https://google.com">Google</HeaderLink>
        </TestHeaderBarContainer>
        <h1>Hola Alberto</h1>
        <VerticalSpacer level="l1">
          This is a responsive vertical spacer
        </VerticalSpacer>
        <Link href="https://google.com" target="_blank">
          This is a link
        </Link>
        <HeroImagePanel imgSrc="/heroImageTest.png"></HeroImagePanel>
      </main>
    </div>
  );
}

//Temporary containers for testing components
const TestHeaderBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: lightGray;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 10;
`;
