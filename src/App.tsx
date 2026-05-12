import { Box, Container, TextField, Typography } from "@mui/material";

import { FlightTable } from "./components/FlightTable/FlightTable";

const App = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ mt: 2 }}>
      <Typography variant="h3" sx={{ justifySelf: "center" }}>
        Flight Table
      </Typography>

      <FlightTable />

      <Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
        <TextField
          multiline
          slotProps={{ input: { sx: { height: "100px" } } }}
          label="Enter flight search prompt..."
          variant="outlined"
          sx={{ width: "100%", bgcolor: "#fff", height: "100px" }}
        />
      </Box>
    </Container>
  );
};

export default App;
