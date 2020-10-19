import { ReactElement } from "react";
import { DocumentHead, Hero } from "../src/containers";

export default function App(props): ReactElement {
  return (
    <div>
      <DocumentHead></DocumentHead>
      <Hero></Hero>
    </div>
  );
}
