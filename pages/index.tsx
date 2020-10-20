import { Fragment, ReactElement } from "react";
import { Hero, PageBase } from "containers";

export default function App(props): ReactElement {
  return (
    <Fragment>
      <PageBase>
        <Hero></Hero>
      </PageBase>
    </Fragment>
  );
}
