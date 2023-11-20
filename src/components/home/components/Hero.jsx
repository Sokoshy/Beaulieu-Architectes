import "./hero.scss";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Nav from "../../nav/Nav";

const GET_IMG_ACCEUIL = gql`
  query PhotoAccuil {
    page(id: "37", idType: DATABASE_ID) {
      acceuil {
        imageBackgroundHero {
          sourceUrl
        }
      }
    }
  }
`;

export function Hero() {
  const { loading, error, data } = useQuery(GET_IMG_ACCEUIL);
  if (loading) return;
  if (error)
    return (
      <p className="text-3xl text-[#f8f8f8]">Error Picture not loading :( </p>
    );
  const backgroundImageUrl =
    data && data.page.acceuil.imageBackgroundHero.sourceUrl;

  return (
    <>
      <Nav />
      <section
        style={{ "--img": ` url('${backgroundImageUrl}')` }}
        className="Hero  bg-no-repeat bg-center bg-cover min-h-screen "
      >
        <div className="  absolute md:absolute top-[34%]">
          <h1 className=" text-5xl text-[#f8f8f8] font-bold  max-w-[234px] inline-block absolute  ml-2.5 sm:ml-8 2xl:ml-[188px] 2xl:text-[5.625rem] md:max-w-[488px]  md:text-7xl ">
            Beaulieu Architecte
          </h1>
          <button className="hidden font-normal text-[#404040] md:bg-[#dcb854] md:px-3  md:py-3 md:rounded-[30px] md:block ml-8 md:mt-40 2xl:px-6 2xl:py-[18px] 2xl:ml-[188px] 2xl:mt-48 ">
            <Link to="/agence">En savoir plus</Link>
          </button>
        </div>
      </section>
    </>
  );
}
