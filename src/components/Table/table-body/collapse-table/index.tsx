import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { CollapseTableHeadComp } from "./collapse-table-head";
import { CollapseTableBodyComp } from "./collapse-table-body";
import { filmCollapseTableFields } from "../../../../utils/table-fields/filmTableFields";
import { useLocation } from "react-router-dom";

export const CollapseTable = ({ index, openStates, film }: { index: number; openStates: any[]; film: any }) => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  const collapseTableFields: {
    [key: string]: {
      title: string;
      parentKey: string;
      childKey: string;
      fields: (
        | { id: number; key: string; name: string; align: string }
        | { id: number; key: string; name: string; align?: undefined }
      )[];
    }[];
  } = {
    allfilms: filmCollapseTableFields,
  };

  const dynamicFields = collapseTableFields[pathname] || [];
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={openStates[index]} timeout="auto" unmountOnExit>
          {dynamicFields.map((field, index) => (
            <Box key={field.title} sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {field.title}
              </Typography>
              <Table size="small" aria-label="purchases">
                <CollapseTableHeadComp index={index} />
                <CollapseTableBodyComp film={film} index={index} />
              </Table>
            </Box>
          ))}
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
