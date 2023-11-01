import useSheetConfigStore from "@store/SheetConfigStore.ts";
import { Switch } from "@mui/joy";

export default function IncludeWeekNumbersToggle() {
  const showWeekNumber = useSheetConfigStore((state) => state.showWeekNumber);
  const setShowWeekNumber = useSheetConfigStore(
    (state) => state.setShowWeekNumber,
  );
  return (
    <Switch
      checked={showWeekNumber}
      onChange={(event) => setShowWeekNumber(event.target.checked)}
    />
  );
}
