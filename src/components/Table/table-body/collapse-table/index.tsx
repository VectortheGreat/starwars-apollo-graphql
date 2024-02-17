import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { CollapseTableHeadComp } from "./collapse-table-head";
import { CollapseTableBodyComp } from "./collapse-table-body";
import { useCollapseTableFields, useTableLocation } from "../../../../utils/helpers/dynamicTableField";

export const CollapseTable = ({ index, openStates, data }: { index: number; openStates: any[]; data: any }) => {
  const dynamicFields = useCollapseTableFields(useTableLocation());
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
        <Collapse in={openStates[index]} timeout="auto" unmountOnExit>
          {dynamicFields.map((field: any, index: number) => (
            <Box key={field.title} sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {field.title}
              </Typography>
              <Table size="small" aria-label="purchases">
                <CollapseTableHeadComp index={index} />
                <CollapseTableBodyComp data={data} index={index} />
              </Table>
            </Box>
          ))}
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
