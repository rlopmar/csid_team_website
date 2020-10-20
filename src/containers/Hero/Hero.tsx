import Head from "next/head";
import { ReactElement } from "react";
import { VerticalSpacer, Link } from "components";

export default function Hero(props): ReactElement {
  return (
    <div>
      <main>
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
