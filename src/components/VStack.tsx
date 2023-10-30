import React from "react";
import { Box, BoxProps } from "@mui/material";

type HStackProps = BoxProps & {
  sx?: BoxProps["sx"];
  gap?: number;
};

const VStack: React.FC<HStackProps> = ({ children, sx, gap, ...rest }) => {
  const finalSx = {
    gap: gap ?? 0,
    ...sx,
  };
  return (
    <Box display="flex" flexDirection="column" {...rest} sx={finalSx}>
      {children}
    </Box>
  );
};

export default VStack;
