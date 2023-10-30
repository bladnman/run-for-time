import React from "react";
import { Box, BoxProps } from "@mui/material";

type HStackProps = BoxProps & {
  sx?: BoxProps["sx"];
  gap?: number;
};

const HStack: React.FC<HStackProps> = ({ children, sx, gap, ...rest }) => {
  const finalSx = {
    gap: gap ?? 0,
    ...sx,
  };
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems={"center"}
      {...rest}
      sx={finalSx}
    >
      {children}
    </Box>
  );
};

export default HStack;
