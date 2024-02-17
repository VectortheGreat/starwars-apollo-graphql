import { TableBody, TableCell, TableRow } from "@mui/material";
import { filmCollapseTableFields } from "../../../../../utils/table-fields/filmTableFields";
import { useTableFields, useTableLocation } from "../../../../../utils/helpers/dynamicTableField";

export const CollapseTableBodyComp = ({ film, index }: { film: any; index: number }) => {
  const parentKey = filmCollapseTableFields[index].parentKey;
  const childKey = filmCollapseTableFields[index].childKey;
  const parentIndex = parentKey ?? 0;
  const childIndex = childKey ?? 0;

  const dynamicFields = useTableFields(useTableLocation());
  return (
    <TableBody>
      {film[parentIndex]?.[childIndex].map((key: any, i: number) => (
        <TableRow key={i}>
          {dynamicFields[index].fields.map((field) => (
            <TableCell key={field.key} component="th" scope="row">
              {key[field.key]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
