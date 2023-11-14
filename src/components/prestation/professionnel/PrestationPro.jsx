import { PrestationDeuxPro } from "./PrestationDeuxPro";
import { PrestationTroisPro } from "./PrestationTroisPro";
import { PrestationUnePro } from "./PrestationUnePro";

export function PrestationPro() {
  return (
    <>
      <PrestationUnePro />
      <PrestationDeuxPro />
      <PrestationTroisPro />
    </>
  );
}
