import { ReactElement } from 'react';
import Head from 'next/head';
import { GlobalStyle } from 'global/theme';

export default function PageBase(props): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Customer Success Innovation Development Team (CSID)</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Khula:wght@700;800&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,700;1,300&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <main>{props.children}</main>
      <h4>We are a team of</h4>
      <h1>Customer Success Innovaton Development</h1>
      <h4>at SAP</h4>
    </>
  );
}
