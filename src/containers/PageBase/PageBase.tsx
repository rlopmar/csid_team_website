import { Fragment, ReactElement } from "react";
import Head from "next/head";
import { GlobalStyle } from "global/theme";

export default function PageBase(props): ReactElement {
  return (
    <Fragment>
      <GlobalStyle />
      <Head>
        <title>Customer Success Innovation Development Team (CSID)</title>
      </Head>
      <main>{props.children}</main>
    </Fragment>
  );
}
