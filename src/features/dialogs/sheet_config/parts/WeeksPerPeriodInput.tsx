import NumberInput from "./NumberInput.tsx";
import useSheetConfigStore from "@store/SheetConfigStore.ts";

export default function WeeksPerPeriodInput() {
  const weeksPerPeriod = useSheetConfigStore((state) => state.weeksPerPeriod);
  const setWeeksPerPeriod = useSheetConfigStore(
    (state) => state.setWeeksPerPeriod,
  );
  return (
    <NumberInput
      value={weeksPerPeriod}
      onChange={setWeeksPerPeriod}
      defaultValue={1}
      step={1}
      min={1}
    />
  );
}
