import React from "react";
import { Stack, StackProps } from "@mui/joy";

interface HStackProps extends StackProps {
  children: React.ReactNode;
  justifyContent?: StackProps["justifyContent"];
}
const HStack: React.FC<HStackProps> = ({
  children,
  justifyContent,
  ...rest
}: HStackProps) => {
  return (
    <Stack
      direction="row"
      justifyContent={justifyContent ?? "space-between"}
      alignItems="center"
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default HStack;
