import { Sheet, Typography } from "@mui/joy";
import HStack from "../../components/HStack.tsx";
import LongRunDaySelect from "./parts/LongRunDaySelect.tsx";
import React from "react";
import { Box } from "@mui/material";
import VStack from "../../components/VStack.tsx";
import FirstWeekLongRunInput from "./parts/FirstWeekLongRunInput.tsx";
import NumberOfWeeksSelect from "./parts/NumberOfWeeksSelect.tsx";
import IncreasePerWeekInput from "./parts/IncreasePerWeekInput.tsx";

export default function SheetConfigForm() {
  return (
    <Sheet color="neutral" variant="outlined" sx={{ paddingX: 4, paddingY: 4 }}>
      <h3>Sheet Config Form</h3>

      <VStack gap={2}>
        <SheetFormRow
          label="Long run day"
          inputComponent={<LongRunDaySelect />}
        />
        <SheetFormRow
          label="First week long run minutes"
          inputComponent={<FirstWeekLongRunInput />}
        />
        <SheetFormRow
          label="Increase per week minutes"
          inputComponent={<IncreasePerWeekInput />}
        />
        <SheetFormRow
          label="Number of weeks"
          inputComponent={<NumberOfWeeksSelect />}
        />
      </VStack>
    </Sheet>
  );
}
function SheetFormRow({
  label,
  inputComponent,
}: {
  label: string;
  inputComponent: React.ReactNode;
}) {
  return (
    <HStack gap={1}>
      <Box sx={{ width: 150, textAlign: "right" }}>
        <Typography>{label}</Typography>
      </Box>

      <Box sx={{ width: 20 }}></Box>

      <Box sx={{ width: 150, textAlign: "left" }}>{inputComponent}</Box>
    </HStack>
  );
}
