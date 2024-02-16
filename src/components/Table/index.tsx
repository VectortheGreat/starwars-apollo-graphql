import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { gql, useQuery } from "@apollo/client";

function createData(name: string, calories: number, fat: number, carbs: number, protein: number, price: number) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

export const TableComponent = (props: { data: any }) => {
  const { data } = props;
  const films = data?.allFilms?.films ?? [];
  console.log(films);

  const [open, setOpen] = React.useState(false);
  return (
    <>
      {films.map((film: any) => {
        return (
          <React.Fragment key={film.title}>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
              <TableCell>
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                {film.title}
              </TableCell>
              <TableCell align="right">{film.director}</TableCell>
              <TableCell align="right">{film.releaseDate}</TableCell>
              <TableCell align="right">{film.episodeID}</TableCell>
              {/* <TableCell align="right">
                {film?.producers?.map((producer: string, index: number) => (
                  <span key={index}>{producer},</span>
                ))}
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      Actors
                    </Typography>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Gender</TableCell>
                          <TableCell align="right">Mass</TableCell>
                          <TableCell align="right">Birth Year</TableCell>
                        </TableRow>
                      </TableHead>
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
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </React.Fragment>
        );
      })}
    </>
  );
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];
const GET_FILMS = gql`
  query getFilms {
    allFilms {
      films {
        title
        director
        producers
        episodeID
        releaseDate
        characterConnection {
          characters {
            name
            gender
            birthYear
            mass
          }
        }
      }
    }
  }
`;
export default function CollapsibleTable() {
  const { error, loading, data } = useQuery(GET_FILMS);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableComponent key={row.name} data={data} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
