import { TableCell, TableHead, TableRow } from "@mui/material";
import { filmTableFields } from "../../../utils/table-fields/filmTableFields";

export const TableHeadComp = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        {filmTableFields.map((field) => (
          <TableCell key={field.id} align={field.align ? "left" : "right"}>
            {field.name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
