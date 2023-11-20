import { useState } from "react";
import "../../components/realisation/style.css";
import { PrestationParticuliers } from "./particulier/PrestationParticulier";
import { PrestationPro } from "./professionnel/PrestationPro";

export function PrestationComponents() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <section className="w-[280px] mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl xl:max-w-screen-lg md:max-w-[700px]  sm:container">
        <div className="flex flex-col ">
          <h1 className=" text-5xl mt-20 text-center font-bold 2xl:text-[5.625rem] 2xl:mt-20 xl:mt-14 xl:text-start  md:text-7xl ">
            Prestation
          </h1>

          <div className="ml-[7%] mt-2 sm:mt-7 sm:ml-[31.5%] lg:ml-[34%] xl:ml-1 xl:mt-14 ">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked((prev) => !prev)}
              id="toggle"
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
        {checked ? <PrestationPro /> : <PrestationParticuliers />}
      </section>
    </>
  );
}
