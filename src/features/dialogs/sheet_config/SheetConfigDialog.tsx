import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  ModalDialog,
  Sheet,
  Table,
  Typography,
} from "@mui/joy";
import React, { useRef } from "react";
import useMegaStore from "@store/MegaStore.ts";
import LongRunDaySelect from "./parts/LongRunDaySelect.tsx";
import FirstWeekLongRunInput from "./parts/FirstWeekLongRunInput.tsx";
import NumberOfWeeksSelect from "./parts/NumberOfWeeksSelect.tsx";
import IncreasePerWeekInput from "./parts/IncreasePerWeekInput.tsx";
import IncludeWeekNumbersToggle from "@features/dialogs/sheet_config/parts/IncludeWeekNumbersToggle.tsx";
import UserNameField from "@features/dialogs/sheet_config/parts/UserNameField.tsx";
import useBreakSize from "@/hooks/useBreakSize.ts";
import WeeksPerPeriodInput from "@features/dialogs/sheet_config/parts/WeeksPerPeriodInput.tsx";

export default function SheetConfigDialog() {
  const [isOpen, setIsOpen] = useMegaStore((state) => [
    state.isSheetConfigDialogOpen,
    state.setIsSheetConfigDialogOpen,
  ]);

  const handleClose = useRef(() => {
    setIsOpen(false);
  }).current;

  const tableData = [
    {
      label: "Name",
      component: <UserNameField />,
    },
    {
      label: "Long run day",
      component: <LongRunDaySelect />,
    },
    {
      label: "First week long run minutes",
      component: <FirstWeekLongRunInput />,
    },
    {
      label: "Increase per period minutes",
      component: <IncreasePerWeekInput />,
    },
    {
      label: "Weeks per period",
      component: <WeeksPerPeriodInput />,
    },
    {
      label: "Number of weeks",
      component: <NumberOfWeeksSelect />,
    },
    {
      label: "Include week numbers",
      component: <IncludeWeekNumbersToggle />,
    },
  ];

  const { isLtSm } = useBreakSize();

  return (
    <Modal onClose={handleClose} open={isOpen}>
      <ModalDialog layout={isLtSm ? "fullscreen" : "center"} minWidth={"600px"}>
        <DialogTitle>Sheet Config</DialogTitle>
        <DialogContent>
          <Sheet
            color="neutral"
            variant="outlined"
            sx={{ paddingX: 4, paddingY: 4 }}
          >
            <Table borderAxis="none">
              <tbody>
                {tableData.map((row, idx) => (
                  <SettingTableRow
                    key={idx}
                    label={row.label}
                    component={row.component}
                  />
                ))}
              </tbody>
            </Table>
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
function SettingTableRow({
  label,
  component,
}: {
  label: string;
  component: React.ReactNode;
}) {
  const { isLtSm } = useBreakSize();

  if (isLtSm) {
    return (
      <>
        <tr>
          <td>
            <Typography>{label}</Typography>
          </td>
        </tr>
        <tr>
          <td>
            <Typography sx={{ marginBottom: "2em" }}>{component}</Typography>
          </td>
        </tr>
      </>
    );
  }
  return (
    <tr>
      <td>
        <Typography>{label}</Typography>
      </td>
      <td>
        <Typography>{component}</Typography>
      </td>
    </tr>
  );
}
