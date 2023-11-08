import { gql, useQuery } from "@apollo/client";

const GET_PRESENTATION_ACCEUIL = gql`
  query PresentatationAcceuil {
    page(id: "37", idType: DATABASE_ID) {
      acceuil {
        chiffreProjetsRealises
        chiffreClientsSatisfaits
        chiffreAnneesDexperience
        imagePresentation {
          altText
          sourceUrl
        }
        texteBrefPresentationEntreprise
      }
    }
  }
`;

export function Presentation() {
  const { loading, error, data } = useQuery(GET_PRESENTATION_ACCEUIL);
  if (loading)
    return (
      <p className="text-3xl mt-3 text-[#f8f8f8] text-center">
        Loading content…
      </p>
    );
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
  const presentation = data?.page.acceuil;
  const img = data.page.acceuil.imagePresentation;

  return (
    <section className="w-[280px] mt-8 mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl 2xl:mt-36 xl:max-w-screen-lg md:max-w-[700px] md:mt-20 sm:container">
      <div className="2xl:ml-16 xl:flex-row xl:gap-20 md:flex md:flex-col md:items-center ">
        <img
          src={img.sourceUrl}
          alt={img.altText}
          className=" object-cover hidden rounded-lg 2xl:w-[574px] 2xl:h-[591px] xl:w-[420px] xl:h-[434px] xl:mb-0 md:block md:w-[368px] md:h-[222px] md:mb-8"
        />
        <div>
          <h2 className=" text-3xl font-semibold text-center 2xl:text-[80px] xl:text-start md:text-5xl">
            PRÉSENTATION
          </h2>
          <p className=" max-w-[330px] mt-5 mx-auto text-base 2xl:mt-7 2xl:text-2xl xl:m-0 xl:mt-6  sm:w-[450px] sm:max-w-[624px]">
            {presentation.texteBrefPresentationEntreprise}
          </p>
          <div className=" flex flex-row mt-2 justify-center gap-8 2xl:mt-4 xl:mt-4">
            <div>
              <p className="text-center font-bold text-[40px] xl:text-5xl">
                {presentation.chiffreAnneesDexperience}
              </p>
              <p className="max-w-[200px] text-center font-bold 2xl:text-3xl xl:text-2xl">
                Années D'expérience
              </p>
            </div>
            <div>
              <p className="text-center text-[40px] font-bold xl:text-5xl">
                {presentation.chiffreProjetsRealises}
              </p>
              <p className="max-w-[200px] text-center font-bold 2xl:text-3xl xl:text-2xl">
                Projets Réalisés
              </p>
            </div>
            <div>
              <p className="text-center text-[40px] font-bold xl:text-5xl">
                {presentation.chiffreClientsSatisfaits}
              </p>
              <p className="max-w-[200px] text-center font-bold 2xl:text-3xl xl:text-2xl">
                Clients Satisfaits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
