import { Container, Typography } from "@mui/material";

import { FlightTable } from "./components/FlightTable/FlightTable";
import { PromptField } from "./components/PromptField/PromptField";

const App = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ mt: 2 }}>
      <Typography variant="h3" sx={{ justifySelf: "center" }}>
        Flight Table
      </Typography>

      <FlightTable />

      <PromptField />
    </Container>
  );
};

export default App;
