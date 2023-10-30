import NumberInput from "./NumberInput.tsx";
import useSheetConfigStore from "@store/SheetConfigStore.ts";

export default function IncreasePerWeekInput() {
  const increasePerWeekMin = useSheetConfigStore(
    (state) => state.increasePerWeekMin,
  );
  const setIncreasePerWeekMin = useSheetConfigStore(
    (state) => state.setIncreasePerWeekMin,
  );
  return (
    <NumberInput
      value={increasePerWeekMin}
      onChange={setIncreasePerWeekMin}
      defaultValue={5}
      step={1}
      min={1}
    />
  );
}
