import VStack from "@components/VStack.tsx";
import BodyToolbar from "@features/main_body/body_toolbar/BodyToolbar.tsx";
import SheetTable from "@features/sheet_table/SheetTable.tsx";
import { Sheet } from "@mui/joy";

export default function MainBody() {
  return (
    <VStack>
      <BodyToolbar />
      <Sheet>
        <SheetTable />
      </Sheet>
    </VStack>
  );
}
