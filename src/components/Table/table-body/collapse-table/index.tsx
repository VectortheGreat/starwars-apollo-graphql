import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { CollapseTableHeadComp } from "./collapse-table-head";
import { CollapseTableBodyComp } from "./collapse-table-body";

export const CollapseTable = ({ index, openStates, film }: { index: number; openStates: any[]; film: any }) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={openStates[index]} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              Actors
            </Typography>
            <Table size="small" aria-label="purchases">
              <CollapseTableHeadComp />
              <CollapseTableBodyComp film={film} />
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
