import { PrestationDeuxParticulier } from "./PrestationDeuxParticulier";
import { PrestationTroiParticulier } from "./PrestationTroisParticulier";
import { PrestationUneParticulier } from "./PrestationUneParticulier";

export function PrestationParticuliers() {
  return (
    <>
      <PrestationUneParticulier />
      <PrestationDeuxParticulier />
      <PrestationTroiParticulier />
    </>
  );
}
