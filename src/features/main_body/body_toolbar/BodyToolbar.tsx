import HStack from "@components/HStack.tsx";
import { IconButton } from "@mui/joy";
import useMegaStore from "@store/MegaStore.ts";
import OurIcon from "@mui/icons-material/Settings";

export default function BodyToolbar() {
  const setIsSheetConfigDialogOpen = useMegaStore(
    (state) => state.setIsSheetConfigDialogOpen,
  );
  return (
    <HStack className={"no-print"}>
      <IconButton
        variant={"solid"}
        color={"neutral"}
        onClick={() => {
          setIsSheetConfigDialogOpen(true);
        }}
      >
        <OurIcon />
      </IconButton>
    </HStack>
  );
}
