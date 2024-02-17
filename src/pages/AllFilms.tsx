import { gql, useQuery } from "@apollo/client";
import { Container } from "@mui/material";
import TableComponent from "../components/Table";
import { filmCollapseTableFields, filmTableFields } from "../utils/table-fields/filmTableFields";
import { generateCollapseFields } from "../utils/helpers/generateCollapseField";

export const AllFilms = () => {
  const parentQuery = "allFilms";
  const childQuery = "films";
  const GET_FILMS = gql`
  query getFilms {
    ${parentQuery} {
      ${childQuery} {
        ${filmTableFields.map((field) => field.key).join("\n")}
        ${generateCollapseFields(filmCollapseTableFields)}
      }
    }
  }
`;
  const { error, loading, data } = useQuery(GET_FILMS);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <Container>
      <TableComponent data={data[`${parentQuery}`][`${childQuery}`]} />
    </Container>
  );
};
