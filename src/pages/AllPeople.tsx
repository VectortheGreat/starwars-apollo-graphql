import { gql, useQuery } from "@apollo/client";
import { Container } from "@mui/material";
import TableComponent from "../components/Table";
import { generateCollapseFields } from "../utils/helpers/generateCollapseField";
import { peopleCollapseTableFields, peopleTableFields } from "../utils/table-fields/peopleTableFields";

export const AllPeople = () => {
  const parentQuery = "allPeople";
  const childQuery = "people";
  const GET_PEOPLE = gql`
  query getPeople {
    ${parentQuery} {
      ${childQuery} {
        ${peopleTableFields.map((field) => field.key).join("\n")}
        ${generateCollapseFields(peopleCollapseTableFields)}
        homeworld {
          name
          surfaceWater
          gravity
          diameter
          population
        }
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
