import Head from "next/head";
import { ReactElement } from "react";
import { VerticalSpacer } from "components";

export default function Hero(props): ReactElement {
  return (
    <div>
      <main>
        <h1>Hola Alberto</h1>
        <VerticalSpacer level="l1"></VerticalSpacer>
      </main>

      <footer>Made with love &lt;3</footer>
    </div>
  );
}
