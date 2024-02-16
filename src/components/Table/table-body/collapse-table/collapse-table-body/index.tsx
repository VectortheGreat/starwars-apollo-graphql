import { TableBody, TableCell, TableRow } from "@mui/material";

export const CollapseTableBodyComp = ({ film }: { film: any }) => {
  return (
    <TableBody>
      {film.characterConnection?.characters?.map((character: any) => (
        <TableRow key={character.name}>
          <TableCell component="th" scope="row">
            {character.name}
          </TableCell>
          <TableCell>{character.gender}</TableCell>
          <TableCell align="right">{character.mass}</TableCell>
          <TableCell align="right">{character.birthYear}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
