import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import React from "react";
import { useState } from "react";

const GET_REALISATION = gql`
  query RealisationContent($slug: ID!) {
    realisation(id: $slug, idType: SLUG) {
      slug
      realisation {
        photoDeLendroitAVotreArrive {
          altText
          sourceUrl
        }
        photoDeLendroitAApresEtOuPendantLaRealisation {
          altText
          sourceUrl
        }
      }
    }
  }
`;
export function RealisationSliderAvant() {
  const [imgArriveCourante, setImgArriveCourante] = useState(0);

  const handleNextArrive = () => {
    setImgArriveCourante((prev) => (prev + 1) % imagesArrive.length);
  };

  const handlePrevArrive = () => {
    setImgArriveCourante(
      (prev) => (prev - 1 + imagesArrive.length) % imagesArrive.length
    );
  };
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_REALISATION, {
    variables: { slug },
  });

  if (loading) return;

  if (error) {
    return (
      <p className="text-3xl mt-3 text-[#f8f8f8] text-center">
        Erreur: {error.message}
      </p>
    );
  }
  const realisation = data.realisation;
  const imagesArrive = realisation.realisation.photoDeLendroitAVotreArrive;

  return (
    <div className="flex items-center justify-center overflow-hidden mt-8 xl:mt-16">
      {/* Slide précédente */}
      <img
        className="rounded-lg object-cover w-[112px] h-[151px] 2xl:w-[413px] 2xl:h-[518px] xl:rounded-xl xl:w-[242px] xl:h-[310px] md:w-[165px] md:h-[214px]"
        src={
          imagesArrive[
            (imgArriveCourante - 1 + imagesArrive.length) % imagesArrive.length
          ].sourceUrl
        }
        alt={
          imagesArrive[
            (imgArriveCourante - 1 + imagesArrive.length) % imagesArrive.length
          ].altText
        }
      />
      {/* Slide actuelle */}

      <button
        className="text-[#dcb854] mx-2 font-bold text-3xl lg:mt-0 xl:mx-6 md:mx-4"
        onClick={handlePrevArrive}
      >
        &#10094;
      </button>
      <img
        className="rounded-lg w-[160px] h-[215px] object-cover 2xl:w-[582px] 2xl:h-[712px] xl:rounded-xl xl:w-[410px] xl:h-[510px] md:w-[276px] md:h-[344px]"
        src={imagesArrive[imgArriveCourante].sourceUrl}
        alt={imagesArrive[imgArriveCourante].altText}
      />
      <button
        className="text-[#dcb854] mx-2 font-bold text-3xl xl:mx-6 md:mx-4"
        onClick={handleNextArrive}
      >
        &#10095;
      </button>
      {/* Slide suivante */}
      <img
        className="rounded-lg object-cover w-[112px] h-[151px] 2xl:w-[413px] 2xl:h-[518px] xl:rounded-xl xl:w-[242px] xl:h-[310px] md:w-[165px] md:h-[214px]"
        src={
          imagesArrive[(imgArriveCourante + 1) % imagesArrive.length].sourceUrl
        }
        alt={
          imagesArrive[(imgArriveCourante + 1) % imagesArrive.length].altText
        }
      />
    </div>
  );
}
export function RealisationSliderApres() {
  const [imgApresCourante, setImgApresCourante] = useState(0);

  const handleNextApres = () => {
    setImgApresCourante((prev) => (prev + 1) % imagesApres.length);
  };

  const handlePrevApres = () => {
    setImgApresCourante(
      (prev) => (prev - 1 + imagesApres.length) % imagesApres.length
    );
  };

  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_REALISATION, {
    variables: { slug },
  });

  if (loading) return;

  if (error) {
    return (
      <p className="text-3xl mt-3 text-[#f8f8f8] text-center">
        Erreur: {error.message}
      </p>
    );
  }
  const realisation = data.realisation;
  const imagesApres =
    realisation.realisation.photoDeLendroitAApresEtOuPendantLaRealisation;

  return (
    <div className=" flex items-center justify-center overflow-hidden mt-8 xl:mt-16">
      {/* Slide précédente */}

      <img
        className="rounded-lg object-cover w-[112px] h-[151px] 2xl:w-[413px] 2xl:h-[518px] xl:rounded-xl xl:w-[242px] xl:h-[310px] md:w-[165px] md:h-[214px]"
        src={
          imagesApres[
            (imgApresCourante - 1 + imagesApres.length) % imagesApres.length
          ].sourceUrl
        }
        alt={
          imagesApres[
            (imgApresCourante - 1 + imagesApres.length) % imagesApres.length
          ].altText
        }
      />
      {/* Slide actuelle */}
      <button
        className="text-[#dcb854] mx-2 font-bold text-3xl lg:mt-0 xl:mx-6 md:mx-4"
        onClick={handlePrevApres}
      >
        &#10094;
      </button>
      <img
        className="rounded-lg  w-[160px] h-[215px] object-cover 2xl:w-[582px] 2xl:h-[712px] xl:rounded-xl xl:w-[410px] xl:h-[510px] md:w-[276px] md:h-[344px]"
        src={imagesApres[imgApresCourante].sourceUrl}
        alt={imagesApres[imgApresCourante].altText}
      />
      <button
        className="text-[#dcb854] mx-2 font-bold text-3xl xl:mx-6 md:mx-4"
        onClick={handleNextApres}
      >
        &#10095;
      </button>
      {/* Slide suivante */}
      <img
        className="rounded-lg object-cover w-[112px] h-[151px] 2xl:w-[413px] 2xl:h-[518px] xl:rounded-xl xl:w-[242px] xl:h-[310px] md:w-[165px] md:h-[214px]"
        src={imagesApres[(imgApresCourante + 1) % imagesApres.length].sourceUrl}
        alt={imagesApres[(imgApresCourante + 1) % imagesApres.length].altText}
      />
    </div>
  );
}
