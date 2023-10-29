import React from "react";
import { Box, BoxProps } from "@mui/material";

type HStackProps = BoxProps & {
  sx?: BoxProps["sx"];
};

const HStack: React.FC<HStackProps> = ({ children, sx, ...rest }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems={"center"}
      {...rest}
      sx={sx}
    >
      {children}
    </Box>
  );
};

export default HStack;
