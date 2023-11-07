import { Blog } from "./components/Blog";
import { Equipe } from "./components/Equipe";
import { Hero } from "./components/Hero";
import { ParleDeNous } from "./components/ParleDeNous";
import { Presentation } from "./components/Presentation";
import { Prestation } from "./components/Prestation";
import { Realisation } from "./components/realisation/Realisation";

export function HomeComponents() {
  return (
    <div>
      <Hero />
      <Presentation />
      <Realisation />
      <Prestation />
      <Blog />
      <Equipe />
      <ParleDeNous />
    </div>
  );
}
