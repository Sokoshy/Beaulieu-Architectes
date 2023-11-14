import { gql, useQuery } from "@apollo/client";

const GET_PREATATION_TROIS = gql`
  query Prestationparticulier($pageId: ID!) {
    prestation(id: $pageId, idType: DATABASE_ID) {
      prestation {
        titreDeLaPrestation3
        prix3
        presentationDeLaPrestation3
        presentationDeLaPrestation3Bis
        imageDecorationPrestation3 {
          sourceUrl
          altText
        }
      }
    }
  }
`;
export function PrestationTroiParticulier() {
  const { loading, error, data } = useQuery(GET_PREATATION_TROIS, {
    variables: { pageId: "34" },
  });
  if (loading) return;
  if (error)
    return (
      <p className="text-3xl text-[#f8f8f8]">Error content not loading :( </p>
    );
  const prestationTrois = data.prestation.prestation;
  console.log(prestationTrois);
  return (
    <section className=" mt-8 md:mt-20 2xl:mt-36 sm:container  mx-auto w-[280px] md:max-w-[700px] xl:max-w-screen-lg 2xl:max-w-screen-2xl">
      <div className="flex flex-col gap-8 items-center xl:flex-wrap xl:flex-row xl:gap-0 text-[#f8f8f8]">
        <div className="flex flex-col gap-5 2xl:gap-10">
          {prestationTrois.imageDecorationPrestation3.map((image, index) => (
            <img
              key={index}
              className="object-cover rounded-lg 2xl:w-[724px] 2xl:h-[576px] xl:w-[470px] xl:h-[550px] sm:w-[550px] sm:h-[550px] "
              src={image.sourceUrl}
              alt={image.altText}
            />
          ))}
        </div>
        <div className="2xl:ml-10 xl:ml-6">
          <div className="flex flex-col sm:flex-row justify-center w-270px 2xl:w-[772px] 2xl:text-xl sm:w-[530px]">
            <h3 className="text-2xl  2xl:text-[40px] sm:text-[32px]">
              {prestationTrois.titreDeLaPrestation3}
            </h3>
            <p className="2xl:text-xl sm:ml-2">{prestationTrois.prix3}</p>
          </div>
          <p
            className="mt-5 w-[270px] 2xl:w-[772px] 2xl:text-xl sm:w-[530px]"
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {prestationTrois.presentationDeLaPrestation3}
          </p>
          <p
            className="mt-5 w-[270px] 2xl:w-[772px] 2xl:text-xl sm:w-[530px]"
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {prestationTrois.presentationDeLaPrestation3Bis}
          </p>
        </div>
      </div>
    </section>
  );
}
