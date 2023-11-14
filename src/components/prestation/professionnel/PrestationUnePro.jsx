import { gql, useQuery } from "@apollo/client";

const GET_PREATATION_UNE = gql`
  query Contactinfo($pageId: ID!) {
    prestation(id: $pageId, idType: DATABASE_ID) {
      prestation {
        titreDeLaPrestation1
        prix
        presentationDeLaPrestation
        imageDecorationPrestation1 {
          altText
          sourceUrl
        }
      }
    }
  }
`;
export function PrestationUnePro() {
  const { loading, error, data } = useQuery(GET_PREATATION_UNE, {
    variables: { pageId: "33" },
  });
  if (loading) return;
  if (error)
    return (
      <p className="text-3xl text-[#f8f8f8]">Error content not loading :( </p>
    );
  const prestationUne = data.prestation.prestation;
  return (
    <section className=" mt-8 md:mt-10 2xl:mt-36 sm:container  mx-auto w-[280px] md:max-w-[700px] xl:max-w-screen-lg 2xl:max-w-screen-2xl">
      <div className="flex flex-col gap-8 items-center xl:flex-wrap xl:flex-row xl:gap-0 text-[#f8f8f8]">
        <img
          className="rounded-lg w-[270px] h-[270px] 2xl:w-[724px] 2xl:h-[576px] xl:w-[470px] xl:h-[550px] sm:w-[550px] sm:h-[550px]"
          src={prestationUne.imageDecorationPrestation1.sourceUrl}
          alt={prestationUne.imageDecorationPrestation1.altText}
        />
        <div className="2xl:ml-10 xl:ml-6">
          <div className="flex justify-center w-270px 2xl:w-[772px] 2xl:text-xl sm:w-[530px]">
            <h3 className="text-2xl  2xl:text-[40px] sm:text-[32px]">
              {prestationUne.titreDeLaPrestation1}
            </h3>
            <p className="ml-0.5 mt-3.5 2xl:text-xl sm:ml-2">
              {prestationUne.prix}
            </p>
          </div>
          <p
            className="mt-5 w-[270px] 2xl:w-[772px] 2xl:text-xl sm:w-[530px]"
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {prestationUne.presentationDeLaPrestation}
          </p>
        </div>
      </div>
    </section>
  );
}
