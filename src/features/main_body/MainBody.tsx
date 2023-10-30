import VStack from "@components/VStack.tsx";
import SheetDisplay from "@features/sheet_display/SheetDisplay.tsx";
import BodyToolbar from "@features/main_body/body_toolbar/BodyToolbar.tsx";

export default function MainBody() {
  return (
    <VStack>
      <BodyToolbar />
      <SheetDisplay />
    </VStack>
  );
}
