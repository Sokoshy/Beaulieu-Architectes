import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import "./slider.scss";

const GET_TEAM = gql`
  query Equipe {
    page(id: "37", idType: DATABASE_ID) {
      acceuil {
        nomPersonne1Equipe
        nomPersonne2Equipe
        nomPersonne3Equipe
        photoPersonne1 {
          altText
          sourceUrl
        }
        photoPersonne2 {
          altText
          sourceUrl
        }
        photoPersonne3 {
          altText
          sourceUrl
        }
        professionPersonne1
        professionPersonne2
        professionPersonne3
      }
    }
  }
`;

function Slider() {
  const { data, loading, error } = useQuery(GET_TEAM);

  const [current, setCurrent] = useState(0);

  if (loading) return;
  if (error)
    return <p className="text-3xl mt-3 text-[#f8f8f8] text-center">Error :(</p>;

  const slides = [
    {
      name: data.page.acceuil.nomPersonne1Equipe,
      image: data.page.acceuil.photoPersonne1.sourceUrl,
      profession: data.page.acceuil.professionPersonne1,
    },
    {
      name: data.page.acceuil.nomPersonne2Equipe,
      image: data.page.acceuil.photoPersonne2.sourceUrl,
      profession: data.page.acceuil.professionPersonne2,
    },
    {
      name: data.page.acceuil.nomPersonne3Equipe,
      image: data.page.acceuil.photoPersonne3.sourceUrl,
      profession: data.page.acceuil.professionPersonne3,
    },
  ];

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevIndex = current === 0 ? slides.length - 1 : current - 1;
  const nextIndex = current === slides.length - 1 ? 0 : current + 1;
  //const isMobile = window.innerWidth < 640;

  return (
    <div className="max-w-[270px] sm:max-w-sm md:max-w-md xl:hidden mx-auto mt-8">
      <div className="slider flex justify-center overflow-hidden">
        <div className=" preview prev mr-8 ">
          <img
            className="rounded-lg mt-[2.5vh] max-w-[112px] max-h-[151px] object-cover"
            src={slides[prevIndex].image}
            alt="Aperçu précédent"
          />
        </div>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <div className="flex flex-col items-center">
                <img
                  className=" rounded-lg max-w-[160px] max-h-[215px] object-cover"
                  src={slide.image}
                  alt={slide.name}
                />
                <h4 className="w-[162px] sm:w-[200px] text-center text-[20px] texte-xl mt-4">
                  {slide.name}
                </h4>
                <p className="w-[172px] sm:w-[200px] text-center text-base">
                  {slide.profession}
                </p>
              </div>
            )}
          </div>
        ))}

        <div className="preview next">
          <img
            className="rounded-lg mt-[2.5vh] ml-8 max-w-[112px] max-h-[151px] object-cover overflow-auto"
            src={slides[nextIndex].image}
            alt="Aperçu suivant"
          />
        </div>
      </div>
      <div className=" relative">
        <button
          className="absolute bottom-[5.4vh] md:bottom-[0vh] left-4 sm:left-16 md:left-24 font-bold text-[#dcb854] text-3xl"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute bottom-[5.4vh] md:bottom-[0vh] right-4 sm:right-16 md:right-24 font-bold text-[#dcb854] text-3xl"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  ); //: null;
}

export default Slider;
