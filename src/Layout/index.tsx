import { ReactElement } from 'react';
import Head from 'next/head';
import { GlobalStyle } from 'global/theme';
import styled from 'styled-components';

import Navbar from 'Navbar';
import Footer from 'Footer';

const Body = styled.div`
  overflow: hidden;
`;

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
      <Navbar />
      <Body>{props.children}</Body>
      <Footer />
    </>
  );
}
