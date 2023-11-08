import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import React from "react";

const GET_POST = gql`
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      blog {
        photoPartie1 {
          sourceUrl
          altText
        }
        premierePartie
        photoPartie2 {
          sourceUrl
          altText
        }
        deuxiemePartie
        photoPartie3 {
          sourceUrl
          altText
        }
        troisiemePartie
      }
    }
  }
`;

export default function BlogPage() {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { slug },
  });

  if (loading)
    return (
      <p className="text-3xl mt-3 text-[#f8f8f8] text-center">
        Loading content…
      </p>
    );

  if (error) {
    return (
      <p className="text-3xl mt-3 text-[#f8f8f8] text-center">
        Erreur: {error.message}
      </p>
    );
  }

  const post = data.post;

  if (!post || !post.blog) {
    return (
      <p className="text-3xl mt-3 text-[#f8f8f8] text-center">
        Article introuvable
      </p>
    );
  }

  return (
    <section className="w-[280px] mt-8 mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl xl:max-w-screen-lg md:max-w-[700px]  sm:container">
      <h1 className="text-3xl font-semibold text-center 2xl:max-w-[45vw] 2xl:text-[2.5rem] xl:text-start xl:max-w-[75vw] md:text-5xl">
        {post.title}
      </h1>
      <div className="flex flex-col-reverse mt-8 xl:flex-row xl:justify-center xl:mt-16">
        {post.blog.premierePartie && (
          <p className="max-w-[270px] mt-5 2xl:max-w-[782px]  2xl:mr-20 self-center 2xl:text-xl xl:max-w-[550px] xl:mr-14 xl:mt-0 sm:max-w-[450px]">
            {post.blog.premierePartie.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />} {line}
              </React.Fragment>
            ))}
          </p>
        )}
        <div className="flex flex-col items-center gap-3">
          {post.blog.photoPartie1[0] && (
            <img
              className={`w-full ${
                post.blog.photoPartie1.length === 1
                  ? "max-w-[280px] h-[150px] 2xl:max-w-[772px] 2xl:h-[668px] xl:max-w-[420px] xl:h-[332px] sm:max-w-[466px] sm:h-[282px]"
                  : "max-w-[280px] h-[150px] 2xl:max-w-[550px] 2xl:h-[668px] xl:max-w-[400px] xl:h-[518px] sm:max-w-[466px] sm:h-[282px]"
              } object-cover rounded-lg xl:rounded-2xl`}
              src={post.blog.photoPartie1[0].sourceUrl}
              alt={post.blog.photoPartie1[0].altText}
            />
          )}
          {post.blog.photoPartie1[1] && (
            <img
              className="w-full rounded-lg object-cover max-w-[280px] h-[150px] 2xl:max-w-[550px] 2xl:h-[668px] xl:rounded-2xl xl:max-w-[400px] xl:h-[518px] sm:max-w-[466px] sm:h-[282px]"
              src={post.blog.photoPartie1[1].sourceUrl}
              alt={post.blog.photoPartie1[1].altText}
            />
          )}
        </div>
      </div>
      {post.blog.deuxiemePartie && post.blog.deuxiemePartie.trim() !== "" && (
        <div className="flex flex-col mt-10	 xl:flex-row xl:mt-28 xl:justify-center">
          <div className="flex flex-col items-center gap-3">
            {post.blog.photoPartie2 && post.blog.photoPartie2[0] && (
              <img
                className={`w-full${
                  post.blog.photoPartie2.length === 1
                    ? " 2xl:max-w-[772px] 2xl:h-[668px] xl:max-w-[420px] xl:h-[332px] sm:max-w-[466px] sm:h-[282px]"
                    : " 2xl:max-w-[550px] 2xl:h-[668px] xl:max-w-[400px] xl:h-[518px] sm:max-w-[466px] sm:h-[282px]"
                } object-cover rounded-lg xl:rounded-2xl 2xl:max-w-[550px] 2xl:h-[668px] xl:max-w-[400px] xl:h-[518px] sm:max-w-[466px] sm:h-[282px]`}
                src={post.blog.photoPartie2[0].sourceUrl}
                alt={post.blog.photoPartie2[0].altText}
              />
            )}
            {post.blog.photoPartie2 && post.blog.photoPartie2[1] && (
              <img
                className="rounded-lg object-cover max-w-[280px] h-[150px] xl:rounded-2xl 2xl:max-w-[550px] 2xl:h-[668px] xl:max-w-[400px] xl:h-[518px] sm:max-w-[466px] sm:h-[282px]"
                src={post.blog.photoPartie2[1].sourceUrl}
                alt={post.blog.photoPartie2[1].altText}
              />
            )}
          </div>
          <p className="max-w-[270px] mt-5 2xl:max-w-[782px] 2xl:ml-20 self-center 2xl:text-xl xl:max-w-[550px] xl:ml-14 xl:mt-0 sm:max-w-[450px]">
            {post.blog.deuxiemePartie.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />} {line}
              </React.Fragment>
            ))}
          </p>
        </div>
      )}

      {post.blog.troisiemePartie && post.blog.troisiemePartie.trim() !== "" && (
        <div className="flex flex-col-reverse mt-10	 xl:gap-0 xl:flex-row xl:mt-28 xl:justify-center">
          <p className="max-w-[270px] mt-5 2xl:max-w[782px] 2xl:mr-20 self-center 2xl:max-w-3xl 2xl:text-xl xl:max-w-[550px] xl:mr-14 xl:mt-0 sm:max-w-[450px]">
            {post.blog.troisiemePartie.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />} {line}
              </React.Fragment>
            ))}
          </p>

          <div className="flex flex-col items-center gap-3">
            {post.blog.photoPartie3 && post.blog.photoPartie3[0] && (
              <img
                className={`w-full ${
                  post.blog.photoPartie3.length === 1
                    ? "max-w-[280px] h-[150px] 2xl:max-w-[772px] 2xl:h-[668px] xl:max-w-[420px] xl:h-[332px] sm:max-w-[466px] sm:h-[282px]"
                    : "max-w-[280px] h-[150px] 2xl:max-w-[550px] 2xl:h-[668px] xl:max-w-[400px] xl:h-[518px] sm:max-w-[466px] sm:h-[282px]"
                } object-cover rounded-lg xl:rounded-2xl`}
                src={post.blog.photoPartie3[0].sourceUrl}
                alt={post.blog.photoPartie3[0].altText}
              />
            )}
            {post.blog.photoPartie3 && post.blog.photoPartie3[1] && (
              <img
                className="rounded-lg object-cover max-w-[280px] h-[150px] xl:rounded-2xl 2xl:max-w-[550px] 2xl:h-[668px] xl:max-w-[400px] xl:h-[518px] sm:max-w-[466px] sm:h-[282px]"
                src={post.blog.photoPartie3[1].sourceUrl}
                alt={post.blog.photoPartie3[1].altText}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
