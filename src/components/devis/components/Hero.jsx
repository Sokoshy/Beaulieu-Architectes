import { gql, useQuery } from "@apollo/client";

const GET_IMG_HERO_DEVIS = gql`
  query Devis($pageId: ID!) {
    page(id: $pageId, idType: DATABASE_ID) {
      devis {
        imageDarrierePlanSectionHero {
          sourceUrl
        }
      }
    }
  }
`;

export function Hero() {
  const { loading, error, data } = useQuery(GET_IMG_HERO_DEVIS, {
    variables: { pageId: "490" },
  });
  if (loading) return;
  if (error)
    return (
      <p className="text-3xl text-[#f8f8f8]">Error Picture not loading :( </p>
    );
  const backgroundImageUrl =
    data.page.devis.imageDarrierePlanSectionHero.sourceUrl;
  return (
    <section
      style={{ "--img": ` url('${backgroundImageUrl}')` }}
      className="Hero  bg-no-repeat bg-center bg-cover min-h-screen "
    >
      <h1 className=" text-5xl font-bold text-[#f8f8f8] inline-block absolute top-[25%]  2xl:ml-[188px] 2xl:text-[5.625rem] ml-8 md:text-7xl ">
        Demande <br /> de devis
      </h1>
    </section>
  );
}
