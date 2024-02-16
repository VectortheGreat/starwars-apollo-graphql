import { TableCell, TableHead, TableRow } from "@mui/material";

export const CollapseTableHeadComp = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Gender</TableCell>
        <TableCell align="right">Mass</TableCell>
        <TableCell align="right">Birth Year</TableCell>
      </TableRow>
    </TableHead>
  );
};
