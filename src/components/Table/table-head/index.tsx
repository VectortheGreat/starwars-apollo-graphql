import { TableCell, TableHead, TableRow } from "@mui/material";
import { useDynamicTableFields, useTableLocation } from "../../../utils/helpers/dynamicTableField";

export const TableHeadComp = () => {
  const dynamicFields = useDynamicTableFields(useTableLocation());
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        {dynamicFields.map((field: any) => (
          <TableCell key={field.id} align={field.align ? "left" : "right"}>
            {field.name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
