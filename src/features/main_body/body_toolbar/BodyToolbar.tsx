import HStack from "@components/HStack.tsx";
import { Box, IconButton, Typography } from "@mui/joy";
import useMegaStore from "@store/MegaStore.ts";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import HelpIcon from "@mui/icons-material/Info";
import VStack from "@components/VStack.tsx";
import useSheetConfigStore from "@store/SheetConfigStore.ts";

export default function BodyToolbar() {
  const clearDayStatus = useSheetConfigStore((state) => state.clearDayStatus);
  const dayStatusList = useSheetConfigStore((state) => state.dayStatusList);
  const setIsSheetConfigDialogOpen = useMegaStore(
    (state) => state.setIsSheetConfigDialogOpen,
  );
  const setIsIntroDialogOpen = useMegaStore(
    (state) => state.setIsIntroDialogOpen,
  );
  const hasMarks = Object.keys(dayStatusList).length > 0;
  return (
    <HStack className={"no-print"} spacing={2} sx={{ width: "100%" }}>
      <ToolbarIconButton
        TheIcon={HelpIcon}
        label={"Info"}
        onClick={() => setIsIntroDialogOpen(true)}
        color={"neutral"}
      />
      <Box sx={{ flexGrow: 1 }} />
      {hasMarks && (
        <ToolbarIconButton
          TheIcon={DeleteIcon}
          label={"Clear"}
          onClick={clearDayStatus}
          color={"secondary"}
        />
      )}
      <ToolbarIconButton
        TheIcon={SettingsIcon}
        label={"Settings"}
        onClick={() => {
          setIsSheetConfigDialogOpen(true);
        }}
        color={"neutral"}
      />
    </HStack>
  );
}
function ToolbarIconButton({
  TheIcon,
  label,
  onClick,
  color = "neutral",
}: {
  TheIcon: any;
  label: string;
  onClick: () => void;
  color: "primary" | "secondary" | "neutral";
}) {
  return (
    <VStack spacing={0}>
      <IconButton variant={"solid"} color={color} onClick={onClick}>
        <TheIcon />
      </IconButton>
      <Typography fontSize="sm" sx={{ opacity: 0.4 }}>
        {label}
      </Typography>
    </VStack>
  );
}
