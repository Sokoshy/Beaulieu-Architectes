import { Avis1 } from "./Avis1";
import { Avis2 } from "./Avis2";
import { Avis3 } from "./Avis3";

export function Avis() {
  return (
    <section className="w-[280px] mt-8 mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl xl:max-w-screen-lg md:max-w-[700px]  sm:container">
      <div className="flex flex-col flex-wrap xl:flex-row gap-7 xl:gap-0">
        <Avis1 />
        <Avis2 />
        <Avis3 />
      </div>
    </section>
  );
}
