import { TableCell, TableHead, TableRow } from "@mui/material";
import { useTableFields, useTableLocation } from "../../../../../utils/helpers/dynamicTableField";

export const CollapseTableHeadComp = ({ index }: { index: number }) => {
  const dynamicFields = useTableFields(useTableLocation());
  return (
    <TableHead>
      <TableRow>
        {dynamicFields[index].fields.map((field) => (
          <TableCell key={field.name}>{field.name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
