import { gql, useQuery } from "@apollo/client";
import { generateCollapseFields } from "../utils/helpers/generateCollapseField";
import { Container } from "@mui/material";
import TableComponent from "../components/Table";
import { speciesCollapseTableFields, speciesTableFields } from "../utils/table-fields/speciesTableFields";

export const AllSpecies = () => {
  const parentQuery = "allSpecies";
  const childQuery = "species";
  const GET_PEOPLE = gql`
  query getPeople {
    ${parentQuery} {
      ${childQuery} {
        ${speciesTableFields.map((field) => field.key).join("\n")}
        ${generateCollapseFields(speciesCollapseTableFields)}
      }
    }
  }
`;
  const { error, loading, data } = useQuery(GET_PEOPLE);
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
