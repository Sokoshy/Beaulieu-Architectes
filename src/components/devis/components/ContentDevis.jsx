import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_IMG_HERO_DEVIS = gql`
  query Devis($pageId: ID!) {
    page(id: $pageId, idType: DATABASE_ID) {
      devis {
        imageDillustrationProfessionnel {
          altText
          sourceUrl
        }
        imageDillustrationParticulier {
          altText
          sourceUrl
        }
      }
    }
  }
`;

export function ContentDevis() {
  const { loading, error, data } = useQuery(GET_IMG_HERO_DEVIS, {
    variables: { pageId: "490" },
  });
  if (loading) return;
  if (error)
    return (
      <p className="text-3xl text-[#f8f8f8]">Error Picture not loading :( </p>
    );
  const devis = data.page.devis;
  return (
    <section className=" mt-8 md:mt-20 2xl:mt-24 sm:container  mx-auto w-[280px] md:max-w-[700px] xl:max-w-screen-lg 2xl:max-w-screen-2xl text-[#f8f8f8]">
      <h2 className="text-3xl font-semibold text-center 2xl:text-[5rem] md:text-5xl">
        NOTRE ÉQUIPE
      </h2>
      <div className="flex flex-col items-center mt-10 xl:flex-row xl:flex-wrap 2xl:gap-[136px] 2xl:mt-[134px] xl:gap-[6.4rem] md:mt-24 gap-4">
        <img
          className="rounded-lg object-cover w-[270px] h-[310px] 2xl:w-[765px] 2xl:h-[1000px] xl:h-[900px] sm:w-[600px] sm:h-[700px]"
          src={devis.imageDillustrationProfessionnel.sourceUrl}
          alt={devis.imageDillustrationProfessionnel.altText}
        />
        <Link>
          <h2 className="text-3xl font-semibold text-center 2xl:text-[5rem] xl:text-start md:text-5xl hover:underline hover:underline-offset-8 hover:decoration-[#dcb854]">
            Professionels
          </h2>
        </Link>
      </div>
      <div className="flex flex-col items-center mt-10 xl:flex-row-reverse xl:flex-wrap 2xl:gap-[136px] 2xl:mt-[134px] xl:gap-[6.4rem] md:mt-24 gap-4">
        <img
          className="rounded-lg object-cover w-[270px] h-[310px] 2xl:w-[765px] 2xl:h-[1000px] xl:h-[900px] sm:w-[600px] sm:h-[700px]"
          src={devis.imageDillustrationParticulier.sourceUrl}
          alt={devis.imageDillustrationParticulier.altText}
        />
        <Link>
          <h2 className="text-3xl font-semibold text-center 2xl:text-[5rem] xl:text-start md:text-5xl hover:underline hover:underline-offset-8 hover:decoration-[#dcb854]">
            Particuliers
          </h2>
        </Link>
      </div>
    </section>
  );
}
