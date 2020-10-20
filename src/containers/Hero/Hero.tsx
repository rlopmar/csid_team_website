import { ReactElement } from "react";
import styled from "styled-components";
import { VerticalSpacer, Link } from "components";
import { colors } from "global";

export default function Hero(props): ReactElement {
  return (
    <div>
      <main>
        <TestHeaderBarContainer></TestHeaderBarContainer>
        <h1>Hola Alberto</h1>
        <VerticalSpacer level="l1">
          This is a responsive vertical spacer
        </VerticalSpacer>
        <Link href="https://google.com" target="_blank">
          This is a link
        </Link>
      </main>
    </div>
  );
}

//Temporary containers for testing components
const TestHeaderBarContainer = styled.div`
  height: 80px;
  background-color: ${colors.primary.mineShaft};
  opacity: 0.5;
`;
