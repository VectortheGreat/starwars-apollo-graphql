import { gql, useQuery } from "@apollo/client";
import { Container } from "@mui/material";
import TableComponent from "../components/Table";
import { filmCollapseTableFields, filmTableFields } from "../utils/table-fields/filmTableFields";
import { generateCollapseFields } from "../utils/helpers/generateCollapseField";

export const AllFilms = () => {
  const GET_FILMS = gql`
  query getFilms {
    allFilms {
      films {
        ${filmTableFields.map((field) => field.key).join("\n")}
        ${generateCollapseFields(filmCollapseTableFields)}
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
