import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_PARLE_DE_NOUS = gql`
  query ParleDeNous {
    page(id: "37", idType: DATABASE_ID) {
      acceuil {
        imageIlParleDeNous {
          altText
          sourceUrl
          title
        }
      }
    }
  }
`;
export function Slider() {
  const { loading, error, data } = useQuery(GET_PARLE_DE_NOUS);
  const [current, setCurrent] = useState(0);

  if (loading) return;
  if (error)
    return <p className="text-3xl mt-3 text-[#f8f8f8] text-center">Error :(</p>;

  const slides = data.page.acceuil.imageIlParleDeNous.map((image) => ({
    link: image.title,
    alt: image.altText,
    image: image.sourceUrl,
  }));

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevIndex = current === 0 ? slides.length - 1 : current - 1;
  const nextIndex = current === slides.length - 1 ? 0 : current + 1;

  return (
    <div className="max-w-[640px]  md:max-w-[768px] xl:hidden mx-auto mt-8">
      <div className="slider flex justify-center overflow-hidden">
        <div className="preview prev mr-8">
          <img
            className="rounded-lg mt-[2.5vh] max-w-[112px] max-h-[151px] object-cover"
            src={slides[prevIndex].image}
            alt={slides[prevIndex].alt}
          />
        </div>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <a href={slide.link} target="_blank">
                <img
                  className="rounded-lg object-cover max-w-[160px] max-h-[215px]"
                  src={slide.image}
                  alt={slide.alt}
                />
              </a>
            )}
          </div>
        ))}

        <div className="preview next">
          <img
            className="rounded-lg mt-[2.5vh] ml-8 max-w-[112px] max-h-[151px] object-cover"
            src={slides[nextIndex].image}
            alt={slides[nextIndex].alt}
          />
        </div>
      </div>

      <div className="relative">
        <button
          className="absolute md:bottom-[-3vh] left-3  sm:left-48 md:left-64 font-bold text-[#dcb854] text-3xl"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute md:bottom-[-3vh] right-3 sm:right-48 md:right-64 font-bold text-[#dcb854] text-3xl"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
