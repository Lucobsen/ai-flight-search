import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import { streamText, type ModelMessage } from "ai";
import { useState } from "react";

export const PromptField = () => {
  const messages: ModelMessage[] = [];
  const [prompt, setPrompt] = useState("");

  const handleOnClick = async () => {
    messages.push({ role: "user", content: prompt });

    const result = streamText({
      model: "anthropic/claude-sonnet-4.5",
      messages,
    });

    let fullResponse = "";

    for await (const delta of result.textStream) {
      fullResponse += delta;
    }

    messages.push({ role: "assistant", content: fullResponse });
    console.log(messages);
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
          sx={{
            width: "100px",
            borderRadius: "unset",
            bgcolor: "#fff",
            ":hover": { bgcolor: "#fff" },
          }}
          onClick={handleOnClick}
        >
          <SendRoundedIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};
