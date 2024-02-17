import { TableBody, TableCell, TableRow } from "@mui/material";
import { useCollapseTableFields, useTableLocation } from "../../../../../utils/helpers/dynamicTableField";

export const CollapseTableBodyComp = ({ data, index }: { data: any; index: number }) => {
  const dynamicFields = useCollapseTableFields(useTableLocation());
  const parentIndex = dynamicFields[index].parentKey ?? null;
  const childIndex = dynamicFields[index].childKey ?? null;

  if (childIndex === null) {
    return (
      <TableBody>
        <TableRow>
          {dynamicFields[index].fields.map((field: any) => (
            <TableCell key={field.key} component="th" scope="row">
              {data[parentIndex]?.[field.key] ?? "No data"}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {data[parentIndex]?.[childIndex]?.map((key: any, i: number) => (
        <TableRow key={i}>
          {dynamicFields[index].fields.map((field: any) => (
            <TableCell key={field.key} component="th" scope="row">
              {key[field.key]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
