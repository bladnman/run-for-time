import { Sheet } from "@mui/joy";
import SheetRow from "@features/sheet_display/sheet_row/SheetRow.tsx";
import useSheetConfigStore from "@store/SheetConfigStore.ts";
import VStack from "@components/VStack.tsx";

export default function SheetDisplay() {
  const username = useSheetConfigStore((state) => state.username);
  const numberOfWeeks = useSheetConfigStore((state) => state.numberOfWeeks);
  return (
    <Sheet sx={{ width: "50%", maxWidth: 700, paddingX: 3, paddingY: 3 }}>
      <h3>{username}</h3>
      <VStack spacing={0}>
        {Array.from(Array(numberOfWeeks).keys()).map((weekNumber) => (
          <SheetRow
            key={weekNumber}
            weekNumber={weekNumber + 1}
            sx={{
              backgroundColor: weekNumber % 2 === 0 ? "#ffffffaa" : "#efefefaa",
              height: "3em",
            }}
          />
        ))}
      </VStack>
    </Sheet>
  );
}
