import React from "react";
import { Stack, StackProps } from "@mui/joy";

interface VStackProps extends StackProps {
  children: React.ReactNode;
  justifyContent?: StackProps["justifyContent"];
}
const VStack: React.FC<VStackProps> = ({
  children,
  justifyContent,
  ...rest
}: VStackProps) => {
  return (
    <Stack
      direction="column"
      justifyContent={justifyContent ?? "space-between"}
      alignItems="center"
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default VStack;
