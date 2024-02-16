import { gql, useQuery } from "@apollo/client";
import { Container } from "@mui/material";
import TableComponent from "../components/Table";

export const AllFilms = () => {
  const GET_FILMS = gql`
    query getFilms {
      allFilms {
        films {
          title
          director
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
  const { error, loading, data } = useQuery(GET_FILMS);
  return (
    <Container>
      <TableComponent error={error} loading={loading} data={data} />
    </Container>
  );
};
