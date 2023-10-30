import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  ModalDialog,
  Sheet,
  Typography,
} from "@mui/joy";
import React, { useRef } from "react";
import HStack from "@components/HStack.tsx";
import VStack from "@components/VStack.tsx";
import useMegaStore from "@store/MegaStore.ts";
import LongRunDaySelect from "./parts/LongRunDaySelect.tsx";
import FirstWeekLongRunInput from "./parts/FirstWeekLongRunInput.tsx";
import NumberOfWeeksSelect from "./parts/NumberOfWeeksSelect.tsx";
import IncreasePerWeekInput from "./parts/IncreasePerWeekInput.tsx";

export default function SheetConfigDialog() {
  const [isOpen, setIsOpen] = useMegaStore((state) => [
    state.isSheetConfigDialogOpen,
    state.setIsSheetConfigDialogOpen,
  ]);

  const handleClose = useRef(() => {
    setIsOpen(false);
  }).current;

  return (
    <Modal onClose={handleClose} open={isOpen}>
      <ModalDialog>
        <DialogTitle>Sheet Config</DialogTitle>
        <DialogContent>
          <Sheet
            color="neutral"
            variant="outlined"
            sx={{ paddingX: 4, paddingY: 4 }}
          >
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
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
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
