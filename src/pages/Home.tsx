import { Container, Stack } from "@mui/material";
import { PageCard } from "../components/page-cards";
import { routes } from "../utils/routes";

export const Home = () => {
  return (
    <Container>
      <Stack direction="row" flexWrap="wrap" gap="2rem">
        {routes.map(
          (route) =>
            route.title !== "Home" && (
              <PageCard
                key={route.title}
                path={route.path}
                title={route.title}
                description={route.description ?? ""}
                image={route.image ?? ""}
              />
            )
        )}
      </Stack>
    </Container>
  );
};
