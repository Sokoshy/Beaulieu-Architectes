import { FormContact } from "./FormContact";
import { Renseignement } from "./Renseignement";

export function FormRenseignement() {
  return (
    <section className=" mt-8 md:mt-20 2xl:mt-36 sm:container  mx-auto w-[280px] md:max-w-[700px] xl:max-w-screen-lg 2xl:max-w-screen-2xl">
      <div className="flex flex-col items-center 2xl:gap-16 xl:gap-[2rem] xl:flex-row gap-8">
        <FormContact />
        <Renseignement />
      </div>
    </section>
  );
}
