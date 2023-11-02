import HStack from "@components/HStack.tsx";
import { Box, Typography } from "@mui/joy";
import padLeft from "@utils/padLeft.ts";
import React from "react";
import useBreakSize from "@/hooks/useBreakSize.ts";

export default function SheetRow({
  weekNumber,
  sx,
}: {
  weekNumber: number;
  sx?: any;
}) {
  return (
    <HStack width={"100%"} sx={{ ...sx }}>
      <WeekLabel weekNumber={weekNumber} width={200} />

      <HStack width={"100%"}>
        <ItemDot />
        <ItemCircle />
        <ItemDot />
        <ItemCircle />
        <ItemCircle />
        <ItemDot />
        <ItemCircle />
      </HStack>
    </HStack>
  );
}
function SheetRowCell({
  children,
  minWidth = 40,
  width,
}: {
  children: React.ReactNode;
  minWidth?: number;
  width?: number;
}) {
  const finalSx = {
    minWidth,
    width,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return <Box sx={finalSx}>{children}</Box>;
}
function WeekLabel({
  weekNumber,
  width,
  minWidth = 100,
}: {
  weekNumber: number;
  minWidth?: number;
  width?: number;
}) {
  const { isLtMd } = useBreakSize();
  return (
    <SheetRowCell minWidth={minWidth} width={width}>
      <Typography sx={{ fontFamily: "Lalezar" }}>
        {isLtMd ? "W" : "WEEK"} {padLeft(weekNumber)}
      </Typography>
    </SheetRowCell>
  );
}
function ItemCircle({
  minWidth = 40,
  width,
  iconSize = "1em",
}: {
  minWidth?: number;
  width?: number;
  iconSize?: string;
}) {
  return (
    <SheetRowCell minWidth={minWidth} width={width}>
      <Box
        sx={{
          flexShrink: 0,
          width: iconSize,
          height: iconSize,
          borderRadius: "50%",
          backgroundColor: "white",
          borderWidth: 3,
          borderColor: "gray",
          borderStyle: "solid",
        }}
      />
    </SheetRowCell>
  );
}
function ItemDot({
  minWidth = 40,
  width,
  iconSize = "0.5em",
}: {
  minWidth?: number;
  width?: number;
  iconSize?: string;
}) {
  return (
    <SheetRowCell minWidth={minWidth} width={width}>
      <Box
        sx={{
          flexShrink: 0,
          width: iconSize,
          height: iconSize,
          backgroundColor: "lightgray",
          borderRadius: "50%",
        }}
      />
    </SheetRowCell>
  );
}
