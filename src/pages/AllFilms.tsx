import { gql, useQuery } from "@apollo/client";
import { Container } from "@mui/material";
import CollapsibleTable from "../components/Table";

export const AllFilms = () => {
  const GET_FILMS = gql`
    query getFilms {
      allFilms {
        films {
          title
          director
          producers
          episodeID
          releaseDate
        }
      }
    }
  `;
  const { error, loading, data } = useQuery(GET_FILMS);
  console.log({ error, loading, data });
  return (
    <Container>
      <CollapsibleTable />
    </Container>
  );
};
