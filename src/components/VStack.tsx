import React from "react";
import { Box, BoxProps } from "@mui/material";

type HStackProps = BoxProps & {
  sx?: BoxProps["sx"];
};

const VStack: React.FC<HStackProps> = ({ children, sx, ...rest }) => {
  return (
    <Box display="flex" flexDirection="column" {...rest} sx={sx}>
      {children}
    </Box>
  );
};

export default VStack;
