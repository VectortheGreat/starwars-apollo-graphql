import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { TableHeadComp } from "./table-head";
import { TableBodyComp } from "./table-body";

export default function TableComponent({ error, loading, data }: { error: any; loading: any; data: any }) {
  const films = data?.allFilms.films ?? [];

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHeadComp />
        <TableBodyComp data={films} />
      </Table>
    </TableContainer>
  );
}
