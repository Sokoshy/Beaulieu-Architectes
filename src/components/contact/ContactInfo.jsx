import { gql, useQuery } from "@apollo/client";
import map from "../../assets/Map.png";

const GET_CONTACT_INFO = gql`
  query Contactinfo($pageId: ID!) {
    page(id: $pageId, idType: DATABASE_ID) {
      contact {
        adresse
        telephone
        email
        horaire
      }
    }
  }
`;

export function ContactInfo() {
  const { loading, error, data } = useQuery(GET_CONTACT_INFO, {
    variables: { pageId: "40" },
  });
  if (loading) return;
  if (error)
    return (
      <p className="text-3xl text-[#f8f8f8]">Error content not loading :( </p>
    );
  const contactInfo = data.page.contact;

  return (
    <section className=" mt-8 md:mt-20 2xl:mt-36 sm:container  mx-auto w-[280px] md:max-w-[700px] xl:max-w-screen-lg 2xl:max-w-screen-2xl">
      <div className="flex flex-col gap-8 items-center xl:flex-row text-[#f8f8f8] 2xl:gap-9 xl:gap-7 ">
        <img
          className="object-cover w-[270px] 2xl:w-[980px] 2xl:h-[860px] xl:w-[654px] xl:h-[464px] sm:w-[636px]"
          src={map}
          alt=""
        />
        <div className="flex flex-col gap-6 w-270px xl:w-[522px] sm:w-[464px] w-270px">
          <div>
            <h3 className="font-semibold text-2xl  2xl:text-[40px] sm:text-[32px]">
              Localisation{" "}
            </h3>
            <h4 className="mt-3 md:text-2xl sm:text-xl">
              {contactInfo.adresse}
            </h4>
          </div>
          <div>
            <h3 className="font-semibold text-2xl  2xl:text-[40px] sm:text-[32px]">
              Télephone
            </h3>
            <h4 className="mt-3 md:text-2xl sm:text-xl">
              {contactInfo.telephone}
            </h4>
          </div>
          <div>
            <h3 className="font-semibold text-2xl  2xl:text-[40px] sm:text-[32px]">
              Email
            </h3>
            <h4 className="mt-3 md:text-2xl sm:text-xl">{contactInfo.email}</h4>
          </div>
          <div>
            <h3 className="font-semibold text-2xl  2xl:text-[40px] sm:text-[32px]">
              Horaires
            </h3>
            <h4
              className="mt-3 md:text-2xl sm:text-xl"
              style={{
                whiteSpace: "pre-line",
              }}
            >
              {contactInfo.horaire}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
