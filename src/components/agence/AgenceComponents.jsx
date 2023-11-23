import { FooterComponents } from "../footer/FooterComponents";
import Nav from "../nav/Nav";
import { ContentAgence } from "./components/ContentAgence";
import { Hero } from "./components/Hero";

export function AgenceComponents() {
  return (
    <>
      <Nav />
      <Hero />
      <ContentAgence />
      <FooterComponents />
    </>
  );
}
