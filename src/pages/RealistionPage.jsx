import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import React from "react";
import {
  RealisationSliderApres,
  RealisationSliderAvant,
} from "../components/realisation/RealisationSliderPage";
import Nav from "../components/nav/Nav";

const GET_REALISATION = gql`
  query RealisationContent($slug: ID!) {
    realisation(id: $slug, idType: SLUG) {
      slug
      title
      id
      realisation {
        paragrapheSurLeDebutDeLaRealisation
        paragrapheSurLaRealisation
      }
    }
  }
`;
export default function RealisationPage() {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_REALISATION, {
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

  const realisation = data.realisation;

  if (!realisation || !realisation.realisation) {
    return (
      <p className="text-3xl mt-3 text-[#f8f8f8] text-center">
        Réalisation introuvable
      </p>
    );
  }

  return (
    <>
      <Nav />
      <section className="w-[280px] mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl xl:max-w-screen-lg md:max-w-[700px]  sm:container">
        <h1 className="text-3xl font-semibold mt-20 text-center 2xl:max-w-[45vw] 2xl:text-[2.5rem] xl:text-start xl:max-w-[75vw] md:text-5xl">
          {realisation.title}
        </h1>
        <h4 className="text-xl mt-12 2xl:text-3xl xl:text-2xl xl:mt-24 ">
          Avant le projet :
        </h4>
        <RealisationSliderAvant />
        {realisation.realisation.paragrapheSurLeDebutDeLaRealisation && (
          <p className="max-w-[270px] mt-7 2xl:max-w-screen-2xl 2xl:mt-28 2xl:text-xl xl:max-w-screen-xl xl:mt-20 lg:max-w-screen-lg lg:mt-14 md:max-w-screen-md md:mt-9  sm:max-w-screen-sm">
            {realisation.realisation.paragrapheSurLeDebutDeLaRealisation
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <br />} {line}
                </React.Fragment>
              ))}
          </p>
        )}
        <h4 className="text-xl mt-12 2xl:text-3xl xl:text-2xl xl:mt-24">
          Avant le projet :
        </h4>
        <RealisationSliderApres />
        {realisation.realisation.paragrapheSurLaRealisation && (
          <p className="max-w-[270px] mt-7 2xl:max-w-screen-2xl 2xl:mt-28 2xl:text-xl xl:max-w-screen-xl xl:mt-20 lg:max-w-screen-lg lg:mt-14 md:max-w-screen-md md:mt-9  sm:max-w-screen-sm">
            {realisation.realisation.paragrapheSurLaRealisation
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <br />} {line}
                </React.Fragment>
              ))}
          </p>
        )}
      </section>
    </>
  );
}
