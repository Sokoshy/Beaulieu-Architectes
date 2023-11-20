import Nav from "../nav/Nav";
import { ContactInfo } from "./ContactInfo";
import { FormRenseignement } from "./FormRenseignement";
import { Hero } from "./Hero";

export function ContactComponents() {
  return (
    <>
      <Nav />
      <Hero />
      <FormRenseignement />
      <ContactInfo />
    </>
  );
}
