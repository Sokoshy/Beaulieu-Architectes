import { FooterComponents } from "../components/footer/FooterComponents";
import Nav from "../components/nav/Nav";
import { RealisationList } from "../components/realisation/RealisationList";

export default function Realisation() {
  return (
    <>
      <Nav />
      <RealisationList />
      <FooterComponents />
    </>
  );
}
