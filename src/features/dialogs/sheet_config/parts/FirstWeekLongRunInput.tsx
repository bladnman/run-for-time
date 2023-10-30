import NumberInput from "./NumberInput.tsx";
import useSheetConfigStore from "@store/SheetConfigStore.ts";

export default function FirstWeekLongRunInput() {
  const firstWeekLongRunMin = useSheetConfigStore(
    (state) => state.firstWeekLongRunMin,
  );
  const setFirstWeekLongRunMin = useSheetConfigStore(
    (state) => state.setFirstWeekLongRunMin,
  );
  return (
    <NumberInput
      value={firstWeekLongRunMin}
      onChange={setFirstWeekLongRunMin}
      defaultValue={10}
      step={1}
      min={1}
    />
  );
}
