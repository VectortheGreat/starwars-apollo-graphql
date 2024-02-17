import { useLocation } from "react-router-dom";
import { filmCollapseTableFields, filmTableFields } from "../table-fields/filmTableFields";
import { peopleCollapseTableFields, peopleTableFields } from "../table-fields/peopleTableFields";

export const useDynamicTableFields = (pathname: string) => {
  const tableFields: { [key: string]: any } = {
    allfilms: filmTableFields,
    allpeople: peopleTableFields,
  };
  return tableFields[pathname] || [];
};

export const useCollapseTableFields = (pathname: string) => {
  const collapseTableFields: { [key: string]: any } = {
    allfilms: filmCollapseTableFields,
    allpeople: peopleCollapseTableFields,
  };
  return collapseTableFields[pathname] || [];
};

export const useTableLocation = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  return pathname;
};
