import { gql, useQuery } from "@apollo/client";
import Slider from "./SliderMobileEquipe";

const GET_EQUIPE = gql`
  query Equipe {
    page(id: "37", idType: DATABASE_ID) {
      acceuil {
        photoPersonne1 {
          altText
          sourceUrl
        }
        nomPersonne1Equipe
        professionPersonne1
        photoPersonne2 {
          altText
          sourceUrl
        }
        nomPersonne2Equipe
        professionPersonne2
        photoPersonne3 {
          altText
          sourceUrl
        }
        nomPersonne3Equipe
        professionPersonne3
      }
    }
  }
`;

export function Equipe() {
  const { loading, error, data } = useQuery(GET_EQUIPE);
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
  const equipe = data?.page.acceuil;

  return (
    <section className=" w-[300px] mt-8 mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl 2xl:mt-36 xl:max-w-screen-lg md:max-w-[700px] md:mt-20 sm:container overflow-visible">
      <h2 className="text-3xl font-semibold text-center 2xl:text-[5rem] xl:text-start md:text-5xl">
        NOTRE ÉQUIPE
      </h2>
      <>
        <Slider />
        <div className="hidden xl:flex gap-44 xl:mt-10 2xl:mt-24">
          <div>
            <img
              className="rounded-lg 2xl:max-w-[380px] 2xl:max-h-[510px] xl:max-w-[248px] xl:max-h-[348px]"
              src={equipe.photoPersonne1.sourceUrl}
              alt={equipe.photoPersonne1.altText}
            />
            <div>
              <h3 className="text-center 2xl:text-3xl xl:text-2xl">
                {equipe.nomPersonne1Equipe}
              </h3>
              <p className="text-base text-center  2xl:text-xl">
                {equipe.professionPersonne1}
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded-lg 2xl:max-w-[380px] 2xl:max-h-[510px] xl:max-w-[248px] xl:max-h-[348px]"
              src={equipe.photoPersonne2.sourceUrl}
              alt={equipe.photoPersonne2.altText}
            />
            <div>
              <h4 className=" 2xl:text-3xl xl:text-2xl text-center">
                {equipe.nomPersonne2Equipe}
              </h4>
              <p className="text-base text-center  2xl:text-xl">
                {equipe.professionPersonne2}
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded-lg 2xl:max-w-[380px] 2xl:max-h-[510px] xl:max-w-[248px] xl:max-h-[348px]"
              src={equipe.photoPersonne3.sourceUrl}
              alt={equipe.photoPersonne3.altText}
            />
            <div>
              <h4 className=" 2xl:text-3xl xl:text-2xl text-center">
                {equipe.nomPersonne3Equipe}
              </h4>
              <p className="text-base text-center  2xl:text-xl">
                {equipe.professionPersonne3}
              </p>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
