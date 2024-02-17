import { gql, useQuery } from "@apollo/client";
import { generateCollapseFields } from "../utils/helpers/generateCollapseField";
import { Container } from "@mui/material";
import TableComponent from "../components/Table";
import { vehicleCollapseTableFields, vehicleTableFields } from "../utils/table-fields/vehicleTableFields";

export const AllVehicles = () => {
  const parentQuery = "allStarships";
  const childQuery = "starships";
  const GET_PEOPLE = gql`
  query getPeople {
    ${parentQuery} {
      ${childQuery} {
        ${vehicleTableFields.map((field) => field.key).join("\n")}
        ${generateCollapseFields(vehicleCollapseTableFields)}
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
