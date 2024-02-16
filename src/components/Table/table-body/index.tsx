import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CollapseTable } from "./collapse-table";
import { filmTableFields } from "../../../utils/table-fields/filmTableFields";

export const TableBodyComp = ({ data }: { data: any }) => {
  const [openStates, setOpenStates] = useState(data.map(() => false));
  const handleOpenToggle = (index: number) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <TableBody>
      {data?.map((dt: any, index: number) => (
        <React.Fragment key={dt.title}>
          <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell>
              <IconButton aria-label="expand row" size="small" onClick={() => handleOpenToggle(index)}>
                {openStates[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            {filmTableFields.map((field) => (
              <TableCell key={field.id} align={field.align ? "left" : "right"}>
                {dt[field.key]}
              </TableCell>
            ))}
          </TableRow>
          <CollapseTable index={index} openStates={openStates} film={dt} />
        </React.Fragment>
      ))}
    </TableBody>
  );
};
