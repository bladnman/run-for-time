import HStack from "@components/HStack.tsx";
import { Button } from "@mui/joy";
import useMegaStore from "@store/MegaStore.ts";

export default function BodyToolbar() {
  const setIsSheetConfigDialogOpen = useMegaStore(
    (state) => state.setIsSheetConfigDialogOpen,
  );
  return (
    <HStack>
      <Button
        onClick={() => {
          setIsSheetConfigDialogOpen(true);
        }}
      >
        Configure
      </Button>
    </HStack>
  );
}
