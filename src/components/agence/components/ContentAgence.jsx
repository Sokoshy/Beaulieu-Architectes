import { gql, useQuery } from "@apollo/client";

const GET_CONTENT_AGENCE = gql`
  query AgenceQuery($id: ID = "2") {
    page(id: $id, idType: DATABASE_ID) {
      agence {
        titrePremiereSection
        textePremiereSection
        titreDeuxiemeSection
        texteDeuxiemeSection
        imageDeuxiemeSection {
          altText
          sourceUrl
        }
        titreTroisiemeSection
        imageTroisiemeSection {
          altText
          sourceUrl
        }
      }
    }
  }
`;

export function ContentAgence() {
  const { loading, error, data } = useQuery(GET_CONTENT_AGENCE);
  if (loading)
    return <p className="text-3xl mt-5 text-[#f8f8f8]">Loading content…</p>;
  if (error) return <p className="text-3xl text-[#f8f8f8]">Error :( </p>;
  const contentFound = Boolean(data?.page.agence);
  if (!contentFound) {
    return (
      <p className="text-3xl text-[#f8f8f8] mx-auto">
        No matching posts found.
      </p>
    );
  }
  return (
    <section className=" mt-8 md:mt-20 2xl:mt-36 sm:container  mx-auto w-[280px] md:max-w-[700px] xl:max-w-screen-lg 2xl:max-w-screen-2xl">
      <div className="  flex flex-wrap max-w-max ">
        <h4 className="text-3xl text-[#f8f8f8] mb-8  sm:w-96">
          {data.page.agence.titrePremiereSection}
        </h4>
        <p
          className="text-[#f8f8f8] max-w-4xl  2xl:text-xl"
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {data.page.agence.textePremiereSection}
        </p>
      </div>
      <div className="mt-36 flex flex-wrap  ">
        <h4 className="text-3xl text-[#f8f8f8] mb-8  sm:w-96">
          {data.page.agence.titreDeuxiemeSection}
        </h4>
        <div>
          <p
            className="text-[#f8f8f8] mb-8  max-w-[968px] 2xl:text-xl"
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {data.page.agence.texteDeuxiemeSection}
          </p>
          <div>
            <ul className="flex justify-center flex-wrap sm:flex-row ">
              {data.page.agence.imageDeuxiemeSection.map((image, index) => (
                <li
                  key={index}
                  className="flex flex-row mb-4 max-w-[297px] max-h-[297px] sm:mb-6 md:mb-16 lg:mb-0 mx-auto "
                >
                  <img
                    className="object-cover rounded-lg"
                    src={image.sourceUrl}
                    alt={image.altText}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-36  flex flex-wrap">
          <h4 className="text-3xl text-[#f8f8f8] mb-8  sm:w-96">
            {data.page.agence.titreTroisiemeSection}
          </h4>
          <div>
            <ul className="flex justify-center flex-wrap lg:flex-row md:gap-5 xl:w-[968px] md:w-[700px] sm:w-[640px]">
              {data.page.agence.imageTroisiemeSection.map((image, index) => (
                <li
                  key={index}
                  className="flex flex-row mb-4 w-[280x] h-[280px] sm:w-[340px] sm:h-[340px]  sm:mb-6 md:mb-16 lg:mb-8 mx-auto "
                >
                  <img
                    className="object-cover rounded-lg aspect-square "
                    src={image.sourceUrl}
                    alt={image.altText}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
