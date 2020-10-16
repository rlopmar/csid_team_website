import Head from "next/head";
import { ReactElement } from "react";
import { Title } from "../../components";

export default function Home(props): ReactElement {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Title fontSize="120px">Hola Alberto</Title>
      </main>

      <footer>Made with love &lt;3</footer>
    </div>
  );
}
