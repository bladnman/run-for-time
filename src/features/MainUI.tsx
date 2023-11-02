import Dialogs from "@features/dialogs/Dialogs.tsx";
import SnackShop from "@features/snack_shop/SnackShop.tsx";
import MainBody from "@features/main_body/MainBody.tsx";
import { Box } from "@mui/joy";
import useBreakSize from "@/hooks/useBreakSize.ts";

export default function MainUI() {
  const { isLtSm } = useBreakSize();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: isLtSm ? "top" : "center",
      }}
    >
      <MainBody />

      <SnackShop />
      <Dialogs />
    </Box>
  );
}
