import { FooterComponents } from "../footer/FooterComponents";
import Nav from "../nav/Nav";
import { Blog } from "./components/Blog";
import { Equipe } from "./components/Equipe";
import { Hero } from "./components/Hero";
import { ParleDeNous } from "./components/ParleDeNous";
import { Presentation } from "./components/Presentation";
import { Prestation } from "./components/Prestation";
import { Avis } from "./components/avis/Avis";
import { Realisation } from "./components/realisation/Realisation";

export function HomeComponents() {
  return (
    <>
      <Nav />
      <Hero />
      <Presentation />
      <Realisation />
      <Prestation />
      <Blog />
      <Avis />
      <Equipe />
      <ParleDeNous />
      <FooterComponents />
    </>
  );
}
