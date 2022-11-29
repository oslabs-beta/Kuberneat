import React from 'react';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40" }: { progress?: any, size?: any }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const angle = progress * 360;

  return (

    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
            // determines how much progress is showing
            // creating radial gradients and modifying it so it looks like a a progress circle
        borderRadius: "50%", // becomes a circle
        width: `${size}px`,
        height: `${size}px`,
      }}
    />

  );
};

export default ProgressCircle;