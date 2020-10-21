import { ReactElement } from "react";
import { PageBase } from "containers";

// To be removed
import Test from "containers/Test";

export default function App(props): ReactElement {
  return (
    <>
      <PageBase>
        <Test></Test>
      </PageBase>
    </>
  );
}
