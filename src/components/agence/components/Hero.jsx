import { gql, useQuery } from "@apollo/client";

const GET_IMG_AGENCE = gql`
  query AgenceQuery($id: ID = "2") {
    page(id: $id, idType: DATABASE_ID) {
      agence {
        imageArrierePlanSectionHero {
          sourceUrl
        }
      }
    }
  }
`;

export function Hero() {
  const { loading, error, data } = useQuery(GET_IMG_AGENCE);
  if (loading) return;
  if (error)
    return (
      <p className="text-3xl text-[#f8f8f8]">Error Picture not loading :( </p>
    );
  const backgroundImageUrl =
    data && data.page.agence.imageArrierePlanSectionHero.sourceUrl;

  return (
    <section
      style={{ "--img": ` url('${backgroundImageUrl}')` }}
      className="Hero  bg-no-repeat bg-center bg-cover min-h-screen "
    >
      <h1 className=" text-5xl font-bold text-[#f8f8f8] inline-block absolute top-[25%]  2xl:ml-[188px] 2xl:text-[5.625rem] ml-8 md:text-7xl ">
        L'agence
      </h1>
    </section>
  );
}
