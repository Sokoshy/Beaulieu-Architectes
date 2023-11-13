import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_RENSEIGNEMENT = gql`
  query Renseignement($pageId: ID!) {
    page(id: $pageId, idType: DATABASE_ID) {
      contact {
        paragrapheBesoinDeRenseignement
      }
    }
  }
`;
export function Renseignement() {
  const { loading, error, data } = useQuery(GET_RENSEIGNEMENT, {
    variables: { pageId: "40" },
  });
  if (loading) return;
  if (error) return <p className="text-3xl text-[#f8f8f8]">Error :( </p>;
  const renseignementParagraphe =
    data.page.contact.paragrapheBesoinDeRenseignement;
  return (
    <div className="text-[#f8f8f8]">
      <h3 className="font-semibold text-2xl w-[270px] 2xl:w-[710px] 2xl:text-[40px] sm:text-[32px] sm:w-[550px]">
        Besoin d'un renseignement ?
      </h3>
      <p
        className="w-[270px] 2xl:w-[710px] 2xl:text-xl sm:w-[550px]"
        style={{
          whiteSpace: "pre-line",
        }}
      >
        {renseignementParagraphe}
      </p>
      <h3 className="font-semibold text-2xl my-3 text-center 2xl:text-[40px] 2xl:my-12  xl:my-8 sm:text-[32px] sm:my-5">
        ou
      </h3>
      <Link>
        <h3 className="font-semibold text-2xl text-center 2xl:text-[40px] sm:text-[32px] hover:underline hover:underline-offset-8 hover:decoration-[#dcb854]">
          Demander un devis
        </h3>
      </Link>
    </div>
  );
}
