import "./style.scss";
import Houzz from "./assets/Icon-Houzz.svg";
import Instagram from "./assets/Icon-Instagram.svg";
import Pinterest from "./assets/Icon-Pinterest.svg";
import Facebook from "./assets/Icon-Facebook.svg";
import PaperPlane from "./assets/Icon-Paper-Plane.svg";
import { Link } from "react-router-dom";
export function FooterComponents() {
  return (
    <footer className="w-[280px} mt-16 mb-[1.875rem] mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl xl:mt-44 xl:max-w-screen-lg xl:mb-[4.375rem] md:max-w-[700px] md:mt-[4.375rem] sm:container">
      <div id="Trait"></div>
      <div className="flex flex-col items-center 2xl:gap-[12.625rem] xl:gap-[106px] xl:flex-row xl:items-start">
        <div className="w-[270px] 2xl:w-[603px] sm:w-[470px]">
          <h4 className="2xl:text-3xl text-xl">SECTEUR D'INTERVENTIONS</h4>
          <p className="mt-3.5 2xl:text-xl xl:mt-5">
            Nous intervenons dans toute la région Occitanie
          </p>
          <h4 className="mb-3.5 mt-4 text-xl 2xl:text-3xl xl:mb-5">
            NEWSLETTER
          </h4>
          <div className="Newsletter h-[35px] sm:h-[40px]">
            <p className="text-sm 2xl:text-xl sm:text-base">
              Inscrives-vous à notre newsletter
            </p>
            <img className="PaperPlane" src={PaperPlane} />
          </div>
        </div>
        <div className="w-[270px] 2xl:w-[286px] mt-5 xl:w-[202px] xl:mt-[-3rem] sm:w-[470px]">
          <div className="flex gap-8">
            <figure>
              <a href="https://www.houzz.fr/professionnels/architecte-d-interieur/krma-architecture-d-interieur-et-decoration-pfvwfr-pf~1227041507?">
                <img src={Houzz} alt="Logo houzz" />
              </a>
            </figure>
            <figure>
              <a href="https://www.instagram.com/k.rma.architecture/">
                <img src={Instagram} alt="Logo instagram" />
              </a>
            </figure>
            <figure>
              <a href="https://www.pinterest.fr/krmarchitecture/">
                <img src={Pinterest} alt="Logo pinterest" />
              </a>
            </figure>
            <figure>
              <a href="https://www.facebook.com/people/Krma-architecture-dint%C3%A9rieur-d%C3%A9coration/100085893891011/">
                <img src={Facebook} alt="Logo facebook" />
              </a>
            </figure>
          </div>
          <h4 className="mt-4 2xl:text-3xl text-xl xl:mt-5">NOUS CONTACTER</h4>
          <p className="mt-3.5 2xl:text-xl xl:mt-5">
            Beaulieu <br />
            28 rue Ozenne
            <br />
            31000 Toulouse
            <br />
            06 27 14 56 36
            <br />
            contact@beaulieu.com
          </p>
        </div>
        <div className="w-[270px] 2xl:w-[240px] xl:w-[160px] sm:w-[470px]">
          <h4 className="2xl:text-3xl text-xl">EN SAVOIR PLUS</h4>
          <p className="mt-3.5 2xl:text-xl xl:mt-5">
            <Link to="/agence">L'AGENCE</Link>
            <br />
            <Link>MENTION LEGAL</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
