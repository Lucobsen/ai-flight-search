import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const PromptField = () => {
  const [prompt, setPrompt] = useState("");

  const handleOnClick = () => {
    console.log(prompt);
  };

  return (
    <Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Stack direction="row">
        <TextField
          slotProps={{ input: { sx: { height: "100px" } } }}
          label="Enter flight search prompt..."
          variant="outlined"
          sx={{ width: "100%", bgcolor: "#fff", height: "100px" }}
          onChange={({ target }) => setPrompt(target.value)}
        />
        <IconButton
          color="primary"
          sx={{ width: "100px" }}
          onClick={handleOnClick}
        >
          <SendRoundedIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};
