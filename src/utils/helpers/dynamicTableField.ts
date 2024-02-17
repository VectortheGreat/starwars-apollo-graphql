import { useLocation } from "react-router-dom";
import { filmCollapseTableFields, filmTableFields } from "../table-fields/filmTableFields";
import { peopleCollapseTableFields, peopleTableFields } from "../table-fields/peopleTableFields";
import { planetCollapseTableFields, planetTableFields } from "../table-fields/planetTableFields";
import { speciesCollapseTableFields, speciesTableFields } from "../table-fields/speciesTableFields";
import { starshipsCollapseTableFields, starshipsTableFields } from "../table-fields/starshipsTableFields";
import { vehicleCollapseTableFields, vehicleTableFields } from "../table-fields/vehicleTableFields";

export const useDynamicTableFields = (pathname: string) => {
  const tableFields: { [key: string]: any } = {
    allfilms: filmTableFields,
    allpeople: peopleTableFields,
    allplanets: planetTableFields,
    allspecies: speciesTableFields,
    allstarships: starshipsTableFields,
    allvehicles: vehicleTableFields,
  };
  return tableFields[pathname] || [];
};

export const useCollapseTableFields = (pathname: string) => {
  const collapseTableFields: { [key: string]: any } = {
    allfilms: filmCollapseTableFields,
    allpeople: peopleCollapseTableFields,
    allplanets: planetCollapseTableFields,
    allspecies: speciesCollapseTableFields,
    allstarships: starshipsCollapseTableFields,
    allvehicles: vehicleCollapseTableFields,
  };
  return collapseTableFields[pathname] || [];
};

export const useTableLocation = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  return pathname;
};
