import Button from "@mui/joy/Button";
import useMegaStore from "../store/MegaStore.ts";
import VStack from "../components/VStack.tsx";
import SheetConfigForm from "./sheet_config_form/SheetConfigForm.tsx";

export default function MainBody() {
  const appName = useMegaStore((state) => state.appName);
  return (
    <VStack>
      <Button variant="solid">{appName}</Button>
      <SheetConfigForm />
    </VStack>
  );
}
