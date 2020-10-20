import { ReactElement } from 'react';
import { Hero, PageBase } from 'containers';

export default function App(props): ReactElement {
  return (
    <>
      <PageBase>
        <Hero></Hero>
      </PageBase>
    </>
  );
}
