import { useState } from "react";
import "../../../realisation/style.css";
import { RealisationParticulier } from "./RealisationParticulier";
import { RealisationProfessionnel } from "./RealisationProfessionnel";

export function Realisation() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <section className="w-[280px] mt-8 mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl xl:max-w-screen-lg md:max-w-[700px]  sm:container">
        <div className="flex flex-col items-center xl:flex-row xl:inline-flex xl:items-end">
          <h1 className=" text-5xl text-center font-bold 2xl:text-[5.625rem] 2xl:mt-20 xl:mt-14 xl:text-start  md:text-7xl ">
            Réalisation
          </h1>

          <div className="xl:ml-[70px] xl:mb-6">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
              id="toggle"
              //id={`toggle ${checked ? "checked" : ""}`}
            />
            <label htmlFor="toggle" className="LabelBtn">
              <p
                className="text-lg xl:text-xl font-medium"
                id={checked ? "toglle" : ""}
              >
                Particuliers<span className="ml-5">Professionels</span>
              </p>
            </label>
          </div>
        </div>
        {checked ? <RealisationProfessionnel /> : <RealisationParticulier />}
      </section>
    </>
  );
}
