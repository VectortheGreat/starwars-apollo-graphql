import { TableCell, TableHead, TableRow } from "@mui/material";
import { useCollapseTableFields, useTableLocation } from "../../../../../utils/helpers/dynamicTableField";

export const CollapseTableHeadComp = ({ index }: { index: number }) => {
  const dynamicFields = useCollapseTableFields(useTableLocation());
  return (
    <TableHead>
      <TableRow>
        {dynamicFields[index].fields.map((field: any) => (
          <TableCell key={field.name}>{field.name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
