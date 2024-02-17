import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { TableHeadComp } from "./table-head";
import { TableBodyComp } from "./table-body";

export default function TableComponent({ data }: { data: any }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHeadComp />
        <TableBodyComp data={data} />
      </Table>
    </TableContainer>
  );
}
