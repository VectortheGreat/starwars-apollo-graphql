// tableUtils.ts
import { useLocation } from "react-router-dom";
import { filmCollapseTableFields } from "../table-fields/filmTableFields";

export const useTableFields = (pathname: string) => {
  const collapseTableFields: {
    [key: string]: {
      title: string;
      parentKey: string;
      childKey: string;
      fields: (
        | { id: number; key: string; name: string; align: string }
        | { id: number; key: string; name: string; align?: undefined }
      )[];
    }[];
  } = {
    allfilms: filmCollapseTableFields,
  };

  return collapseTableFields[pathname] || [];
};

export const useTableLocation = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  return pathname;
};
