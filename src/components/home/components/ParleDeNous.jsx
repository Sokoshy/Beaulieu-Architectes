import { gql, useQuery } from "@apollo/client";
import { Slider } from "./SliderMobileParle";

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

export function ParleDeNous() {
  const { loading, error, data } = useQuery(GET_PARLE_DE_NOUS);
  if (loading) return;
  if (error) return <p className="text-3xl text-[#f8f8f8]">Error :( </p>;
  const contentFound = Boolean(data?.page.acceuil);
  if (!contentFound) {
    return (
      <p className="text-3xl text-[#f8f8f8] mx-auto">
        No matching content found.
      </p>
    );
  }
  const parleDeNous = data?.page.acceuil;
  return (
    <section className="max-w-[640px] mt-8 mx-auto text-[#f8f8f8] 2xl:max-w-screen-2xl 2xl:mt-36 xl:max-w-screen-lg md:max-w-[768px] md:mt-20 sm:container">
      <h2 className=" text-3xl font-semibold uppercase text-center 2xl:text-[5rem] md:text-5xl">
        Ils parlent de nous
      </h2>
      <Slider />
      <div className="hidden xl:flex flex-row gap-20 justify-center xl:mt-20">
        {parleDeNous.imageIlParleDeNous.map((image, index) => (
          <a key={index} href={image.title} target="_blank">
            <img
              className="object-cover rounded-lg  max-w-[380px] max-h-[270px]  2xl:max-w-[450px] 2xl:max-h-[300px]"
              src={image.sourceUrl}
              alt={image.altText}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
