import { gql, useQuery } from "@apollo/client";

const GET_PREATATION_DEUX = gql`
  query PrestationParticulier($pageId: ID!) {
    prestation(id: $pageId, idType: DATABASE_ID) {
      prestation {
        titreDeLaPrestation2
        prix2
        presentationDeLaPrestation2
        imageDecorationPrestation2 {
          altText
          sourceUrl
        }
      }
    }
  }
`;
export function PrestationDeuxParticulier() {
  const { loading, error, data } = useQuery(GET_PREATATION_DEUX, {
    variables: { pageId: "34" },
  });
  if (loading) return;
  if (error)
    return (
      <p className="text-3xl text-[#f8f8f8]">Error content not loading :( </p>
    );
  const prestationDeux = data.prestation.prestation;
  return (
    <section className=" mt-8 md:mt-20 2xl:mt-36 sm:container  mx-auto w-[280px] md:max-w-[700px] xl:max-w-screen-lg 2xl:max-w-screen-2xl">
      <div className="flex flex-col-reverse gap-8 items-center xl:flex-wrap xl:flex-row xl:gap-0 text-[#f8f8f8]">
        <div className="2xl:mr-10 xl:mr-6">
          <div className="flex justify-center w-270px 2xl:w-[772px] 2xl:text-xl sm:w-[530px]">
            <h3 className="text-2xl  2xl:text-[40px] sm:text-[32px]">
              {prestationDeux.titreDeLaPrestation2}
            </h3>
            <p className="ml-0.5 mt-3.5 2xl:text-xl sm:ml-2">
              {prestationDeux.prix}
            </p>
          </div>
          <p
            className="mt-5 w-[270px] 2xl:w-[772px] 2xl:text-xl sm:w-[530px]"
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {prestationDeux.presentationDeLaPrestation2}
          </p>
        </div>
        <img
          className="rounded-lg w-[270px] h-[270px] 2xl:w-[724px] 2xl:h-[576px] xl:w-[470px] xl:h-[550px] sm:w-[550px] sm:h-[550px]"
          src={prestationDeux.imageDecorationPrestation2.sourceUrl}
          alt={prestationDeux.imageDecorationPrestation2.altText}
        />
      </div>
    </section>
  );
}
