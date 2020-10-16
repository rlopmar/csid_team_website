import Head from "next/head";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>Welcome to CSID WEBSITE</h1>
      </main>

      <footer>Made with love &lt;3</footer>
    </div>
  );
}
