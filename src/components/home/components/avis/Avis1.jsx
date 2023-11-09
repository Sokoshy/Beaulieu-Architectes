import { gql, useQuery } from "@apollo/client";

const GET_AVIS = gql`
  query Avis1($pageId: ID!) {
    page(id: $pageId, idType: DATABASE_ID) {
      avis {
        nomClient
        textAvis
        image1 {
          altText
          sourceUrl
        }
        image2 {
          altText
          sourceUrl
        }
        image3 {
          altText
          sourceUrl
        }
        nombreDetoile {
          altText
          sourceUrl
        }
      }
    }
  }
`;

export function Avis1() {
  const { loading, error, data } = useQuery(GET_AVIS, {
    variables: { pageId: "377" },
  });
  if (loading) return;
  if (error)
    return (
      <p className="text-3xl mt-3 text-[#f8f8f8] text-center">
        Error: {error.message}
      </p>
    );
  const avis = data.page.avis;

  return (
    <div className="flex flex-col items-center ">
      <div className="max-w-[270px] flex flex-wrap gap-4 justify-center 2xl:max-w-[500px] xl:max-w-[330px] sm:max-w-[466px]  sm:gap-0 sm:justify-normal">
        <img
          className="rounded-lg object-cover w-[270px] h-[200px] 2xl:w-[268px] 2xl:h-[196px] xl:w-[168px] xl:h-[116px] sm:w-[248px] sm:h-[176px]"
          src={avis.image1.sourceUrl}
          alt={avis.image1.altText}
        />
        <img
          className="rounded-lg object-cover w-[270px] h-[200px] 2xl:w-[210px] 2xl:h-[154px] 2xl:mt-24 2xl:ml-[1.375rem] xl:w-[128px] xl:h-[86px] xl:mt-20 xl:ml-8 sm:w-[190px] sm:h-[134px] sm:mt-24 sm:ml-7"
          src={avis.image2.sourceUrl}
          alt={avis.image2.altText}
        />
        <img
          className="rounded-lg object-cover w-[270px] h-[200px] 2xl:w-[182px] 2xl:h-[132px] 2xl:ml-[16%] xl:w-[110px] xl:h-[78px] xl:ml-[15%] xl:mt-[-12px] sm:w-[162px] sm:h-[112px] sm:ml-[20.5%] sm:mt-[-16px]"
          src={avis.image3.sourceUrl}
          alt={avis.image3.altText}
        />
      </div>
      <div className="max-w-[270px] mt-2.5 2xl:max-w-[500px] 2xl:mt-7 xl:max-w-[330px] sm:max-w-[450px] sm:mt-5 ">
        <h4 className="text-xl 2xl:text-3xl md:text-2xl text-center xl:text-start">
          {avis.nomClient}
        </h4>
        <p
          className="mt-2 2xl:text-xl text-base"
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {avis.textAvis}
        </p>
        <img
          className="object-cover mt-1.5 max-w-[219px] max-h-[32px]"
          src={avis.nombreDetoile.sourceUrl}
          alt={avis.nombreDetoile.altText}
        />
      </div>
    </div>
  );
}
