import { gql, useQuery } from "@apollo/client";

const GET_REALISATIONS = gql`
  query RealisationParticulier($first: Int, $name: [String] = "Particulier") {
    categoriesRealisations(where: { name: $name }) {
      nodes {
        taxonomyName
        name
        realisations(first: $first) {
          nodes {
            id
            slug
            title
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            realisation {
              extrait
            }
          }
        }
      }
    }
  }
`;
export function RealisationParticulier() {
  const { loading, error, data } = useQuery(GET_REALISATIONS, {
    variables: { first: 3 },
  });
  if (loading) return;
  if (error)
    return <p className="text-3xl text-[#f8f8f8]">Error: {error.message}</p>;
  const realisations =
    data?.categoriesRealisations?.nodes[0]?.realisations?.nodes;

  return (
    <section className="w-[280px] mt-7 mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl 2xl:mt-36 xl:max-w-screen-lg md:max-w-[700px] xl:mt-20 sm:container">
      <div className="  flex flex-col items-center gap-5 xl:gap-0 xl:flex-wrap xl:flex-row">
        {realisations.map((realisation, index) => (
          <article
            key={realisation.id}
            className={`${
              index % 3 === 0
                ? "w-fit flex flex-col items-end 2xl:mt-32 "
                : index % 3 === 1
                ? "w-auto flex flex-col items-end xl:items-center xl:flex-row-reverse 2xl:mt-[-673px] 2xl:ml-[3.87rem] xl:ml-10 xl:mt-[-400px]"
                : "w-fit flex flex-col items-end xl:items-center xl:flex-row 2xl:mt-[-650px] 2xl:ml-[calc(47.5%-140px)] xl:mt-[-360px] xl:ml-[calc(43%-54px)]"
            }`}
          >
            <img
              className={`${
                index % 3 === 0
                  ? "w-[270px] h-[200px] object-cover rounded-lg xl:rounded-2xl 2xl:w-[530px] 2xl:h-[476px] xl:w-[344px] xl:h-[316px] sm:w-[466px] sm:h-[350px]"
                  : index % 3 === 1
                  ? "w-[270px] h-[200px] object-cover rounded-lg xl:rounded-2xl 2xl:w-[482px] 2xl:h-[396px] xl:w-[320px] xl:h-[260px] sm:w-[466px] sm:h-[350px]"
                  : "w-[270px] h-[200px] object-cover rounded-lg xl:rounded-2xl 2xl:w-[415px] 2xl:h-[342px] xl:w-[292px] xl:h-[240px] sm:w-[466px] sm:h-[350px]"
              }`}
              src={realisation.featuredImage.node.sourceUrl}
              alt={realisation.featuredImage.node.altText}
            />
            <div
              className={` ${
                index % 3 === 0
                  ? " mt-5"
                  : index % 3 === 1
                  ? "mt-5 2xl:mr-12 xl:mr-5"
                  : "mt-5 2xl:ml-12 xl:ml-5"
              }`}
            >
              <h4
                className={` ${
                  index % 3 === 0
                    ? "max-w-[270px] 2xl:max-w-[530px] xl:max-w-[344px] sm:max-w-[450px] mt-1 mb-2.5  2xl:text-3xl xl:text-2xl md:text-2xl text-center xl:text-start"
                    : index % 3 === 1
                    ? "max-w-[270px] 2xl:max-w-[414px] xl:max-w-[300px] sm:max-w-[450px] mt-1 mb-2.5 2xl:text-3xl xl:text-2xl md:text-2xl text-center xl:text-start"
                    : "max-w-[270px] 2xl:max-w-[450px] xl:max-w-[350px] sm:max-w-[450px] mt-4 mb-2.5 2xl:text-3xl xl:text-2xl md:text-2xl text-center xl:text-start"
                }`}
              >
                {realisation.title}
              </h4>

              {realisation.realisation.extrait &&
                realisation.realisation.extrait
                  .split("\n")
                  .map((paragraph, i) => (
                    <p
                      key={i}
                      className={`${
                        index % 3 === 0
                          ? "max-w-[270px] 2xl:text-xl 2xl:max-w-[530px] xl:max-w-[344px] sm:max-w-[450px] text-base"
                          : index % 3 === 1
                          ? "max-w-[270px] 2xl:text-xl 2xl:max-w-[414px] xl:max-w-[300px] sm:max-w-[450px] text-base"
                          : "max-w-[270px] 2xl:text-xl 2xl:max-w-[450px] xl:max-w-[350px] sm:max-w-[450px] text-base"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
              <div className="flex justify-center xl:block">
                <button className="font-medium text-[#404040] mt-3 2xl:mt-2.5 text-base px-[32.2px] py-[11px] rounded-lg xl:text-lg 2xl:text-xl bg-[#dcb854] xl:mt-2 xl:px-[32.2px] xl:py-[11px] xl:rounded-lg">
                  Plus sur le projet
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
