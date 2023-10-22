import React from "react";
import { Box, Divider, Typography } from "@mui/material";

function HorizontalLineWithText({ text }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Divider sx={{ color: "#04385a", fontWeight: "600", fontSize: 20 }}>
        {text}
      </Divider>
    </Box>
  );
}

export default HorizontalLineWithText;
