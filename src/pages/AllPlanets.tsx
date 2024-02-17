import { gql, useQuery } from "@apollo/client";
import { planetCollapseTableFields, planetTableFields } from "../utils/table-fields/planetTableFields";
import { generateCollapseFields } from "../utils/helpers/generateCollapseField";
import { Container } from "@mui/material";
import TableComponent from "../components/Table";

export const AllPlanets = () => {
  const parentQuery = "allPlanets";
  const childQuery = "planets";
  const GET_PEOPLE = gql`
  query getPeople {
    ${parentQuery} {
      ${childQuery} {
        ${planetTableFields.map((field) => field.key).join("\n")}
        ${generateCollapseFields(planetCollapseTableFields)}
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
