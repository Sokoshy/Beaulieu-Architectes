import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_PRESTATION_ACCEUIL = gql`
  query PrestationAcceuil {
    page(id: "37", idType: DATABASE_ID) {
      acceuil {
        texteBrefPrestationParticulier
        texteBrefPrestationPro
        imagePrestationParticulier {
          altText
          sourceUrl
        }
        imagePrestationPro {
          altText
          sourceUrl
        }
      }
    }
  }
`;

export function Prestation() {
  const { loading, error, data } = useQuery(GET_PRESTATION_ACCEUIL);
  if (loading) return;
  if (error)
    return (
      <p className="text-3xl mt-3 text-[#f8f8f8] text-center">Error :( </p>
    );
  const contentFound = Boolean(data?.page.acceuil);
  if (!contentFound) {
    return (
      <p className="text-3xl mt-3 text-[#f8f8f8] text-center">
        No matching content found.
      </p>
    );
  }
  const prestation = data?.page.acceuil;
  const img = data?.page.acceuil.imagePrestationParticulier;
  const imgPro = data?.page.acceuil.imagePrestationPro;

  return (
    <section className="w-[280px] mt-8 mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl 2xl:mt-36 xl:max-w-screen-lg md:max-w-[700px] md:mt-20 sm:container">
      <h2 className=" text-3xl font-semibold text-center 2xl:text-[80px] md:text-5xl">
        PRESTATION
      </h2>
      <div className="flex flex-col items-center mt-8 2xl:mt-14 2xl:gap-20 2xl:ml-16 xl:flex-row xl:gap-6 xl:mt-10">
        <Link to="/">
          <img
            className="object-cover rounded-lg w-[280px] h-[150px] 2xl:w-[662px] 2xl:h-[400px] sm:w-[466px] sm:h-[282px] "
            src={img.sourceUrl}
            alt={img.altText}
          />
        </Link>
        <div>
          <div className="mt-5">
            <h4 className="text-xl text-center 2xl:text-3xl xl:text-start xl:text-2xl md:text-2xl">
              Pour les particuliers
            </h4>
            <p className=" max-w-[270px] mt-2.5 text-base 2xl:text-xl sm:max-w-[450px] ">
              {prestation.texteBrefPrestationParticulier}
            </p>
          </div>
          <button className="hidden mt-3 font-medium text-[#404040] 2xl:mt-2 hover:scale-110 xl:bg-[#dcb854] xl:px-[32.2px] xl:py-[11px] xl:rounded-lg xl:block xl:mt-2">
            <Link to="/">En savoir plus</Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 2xl:mt-14 2xl:gap-20 2xl:ml xl:flex-row-reverse xl:gap-6 xl:mt-10">
        <Link to="/">
          <img
            className="object-cover rounded-lg w-[280px] h-[150px] 2xl:w-[662px] 2xl:h-[400px] sm:w-[466px] sm:h-[282px] "
            src={imgPro.sourceUrl}
            alt={imgPro.altText}
          />
        </Link>
        <div className="xl:text-end ">
          <div className="mt-5">
            <h4 className="text-xl text-center 2xl:text-3xl xl:text-end xl:text-2xl  md:text-2xl">
              Pour les particuliers
            </h4>
            <p className="mt-2.5 max-w-[270px] text-base 2xl:text-xl sm:max-w-[450px] ">
              {prestation.texteBrefPrestationPro}
            </p>
          </div>
          <button className="hidden font-medium text-[#404040] mt-3 ml-[62%] 2xl:mt-2 hover:scale-110 xl:bg-[#dcb854] xl:items-end xl:block  xl:mt-2 xl:px-[32.2px] xl:py-[11px] xl:rounded-lg">
            <Link to="/">En savoir plus</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
