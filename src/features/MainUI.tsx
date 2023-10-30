import Dialogs from "@features/dialogs/Dialogs.tsx";
import SnackShop from "@features/snack_shop/SnackShop.tsx";
import MainBody from "@features/main_body/MainBody.tsx";

export default function MainUI() {
  return (
    <>
      <MainBody />
      <SnackShop />
      <Dialogs />
    </>
  );
}
