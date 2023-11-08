import { gql, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";

const GET_REALISATIONS = gql`
  query RealisationParticulier(
    $first: Int
    $after: String
    $name: [String] = "Particulier"
  ) {
    categoriesRealisations(where: { name: $name }) {
      nodes {
        taxonomyName
        name
        realisations(first: $first, after: $after) {
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
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
`;

export function RealisationParticulier() {
  const [realisations, setRealisations] = useState([]);
  const [pageInfo, setPageInfo] = useState(null);
  const { loading, error, data, fetchMore } = useQuery(GET_REALISATIONS, {
    variables: { first: 6 },
  });

  useEffect(() => {
    if (data) {
      setPageInfo(
        data?.categoriesRealisations?.nodes[0]?.realisations?.pageInfo
      );
      setRealisations(
        data.categoriesRealisations.nodes[0]?.realisations?.nodes || []
      );
    }
  }, [data]);

  const loadMoreRealisations = () => {
    fetchMore({
      variables: {
        after: pageInfo.endCursor,
      },
    }).then((refetchData) => {
      setPageInfo(
        refetchData.data.categoriesRealisations.nodes[0].realisations.pageInfo
      );
      setRealisations([
        ...realisations,
        ...(refetchData.data.categoriesRealisations.nodes[0]?.realisations
          ?.nodes || []),
      ]);
    });
  };
  if (loading) return;
  if (error)
    return (
      <p className="text-3xl mt-3 text-[#f8f8f8] text-center">
        Error: {error.message}
      </p>
    );

  return (
    <section className="w-[280px] mt-8 mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl xl:max-w-screen-lg md:max-w-[700px]  sm:container">
      <div className="flex flex-col gap-5 items-center text-lg xl:flex-row xl:flex-wrap xl:gap-0 xl:items-stretch lg:text-xl  2xl:text-2xl">
        {realisations.map((realisation, index) => (
          <article
            key={realisation.id}
            className={`${
              index % 6 === 0
                ? "w-fit 2xl:mt-20 xl:mt-14 mt-8"
                : index % 6 === 1
                ? "w-fit 2xl:mt-40 2xl:ml-72 xl:mt-44 xl:ml-[7.31rem]"
                : index % 6 === 2
                ? "w-fit 2xl:mt-[-11rem] 2xl:ml-20 xl:mt-[-8rem] xl:ml-14"
                : index % 6 === 3
                ? "w-fit 2xl:mt-52 2xl:ml-[21.4rem] xl:mt-52 xl:ml-[5.935rem]"
                : index % 6 === 4
                ? "w-fit 2xl:mt-[-1.5rem] xl:mt-[-2.5rem]"
                : "w-fit 2xl:mt-56 2xl:ml-20 xl:mt-24 xl:ml-[9.5rem]"
            }`}
          >
            <img
              className={`${
                index % 6 === 0
                  ? "w-[270px] h-[200px] object-cover rounded-2xl 2xl:w-[521px] 2xl:h-[468px] xl:w-[421px] xl:h-[368px] md:w-[441px] md:h-[388px] "
                  : index % 6 === 1
                  ? "w-[270px] h-[200px] object-cover rounded-2xl 2xl:w-[696px] 2xl:h-[845px] xl:w-[486px] xl:h-[535px] md:w-[441px] md:h-[388px] "
                  : index % 6 === 2
                  ? "w-[270px] h-[200px] object-cover rounded-2xl 2xl:w-[642px] 2xl:h-[745px] xl:w-[432px] xl:h-[545px] md:w-[441px] md:h-[388px]  "
                  : index % 6 === 3
                  ? "w-[270px] h-[200px] object-cover rounded-2xl 2xl:h-[645px] xl:w-[441px] xl:h-[545px] md:w-[441px] md:h-[388px] "
                  : index % 6 === 4
                  ? "w-[270px] h-[200px] object-cover rounded-2xl 2xl:w-[696px] 2xl:h-[625px] xl:w-[486px] xl:h-[415px] md:w-[441px] md:h-[388px] "
                  : "w-[270px] h-[200px] object-cover rounded-2xl 2xl:w-[554px] 2xl:h-[724px] xl:w-[334px] xl:h-[514px] md:w-[441px] md:h-[388px] "
              }`}
              src={realisation.featuredImage.node.sourceUrl}
              alt={realisation.featuredImage.node.altText}
            />
            <h4
              className={`${
                index % 6 === 0
                  ? "max-w-[270px]  2xl:max-w-[501px] max-h-[200px] xl:max-w-[401px] md:max-w-[441px] mt-1 text-center"
                  : index % 6 === 1
                  ? "max-w-[270px]  2xl:max-w-[676px] max-h-[200px] xl:max-w-[476px] md:max-w-[441px] mt-1 text-center"
                  : index % 6 === 2
                  ? "max-w-[270px]  2xl:max-w-[622px] max-h-[200px] xl:max-w-[422px] md:max-w-[441px] mt-1 text-center"
                  : index % 6 === 3
                  ? "max-w-[270px]  xl:max-w-[421px] max-h-[200px]  md:max-w-[441px] mt-2 text-center"
                  : index % 6 === 4
                  ? "max-w-[270px]  2xl:max-w-[676px] max-h-[200px] xl:max-w-[466px] md:max-w-[441px] mt-1 text-center"
                  : "max-w-[270px]  2xl:max-w-[534px] max-h-[200px] xl:max-w-[314px] md:max-w-[441px] mt-1 text-center"
              }`}
            >
              {realisation.title}
            </h4>
          </article>
        ))}
      </div>
      <div className="flex justify-center">
        {pageInfo?.hasNextPage && (
          <button
            className="font-medium text-[#404040] mt-5 mb-4 bg-[#dcb854] px-[32.2px] py-[11px] rounded-lg xl:mt-8 2xl:mt-10 hover:scale-110"
            onClick={loadMoreRealisations}
            disabled={loading}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
}
