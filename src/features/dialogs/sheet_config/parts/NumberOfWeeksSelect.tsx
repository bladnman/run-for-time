import NumberInput from "./NumberInput.tsx";
import useSheetConfigStore from "@store/SheetConfigStore.ts";

export default function NumberOfWeeksSelect() {
  const numberOfWeeks = useSheetConfigStore((state) => state.numberOfWeeks);
  const setNumberOfWeeks = useSheetConfigStore(
    (state) => state.setNumberOfWeeks,
  );
  return (
    <NumberInput
      value={numberOfWeeks}
      onChange={setNumberOfWeeks}
      defaultValue={10}
      step={1}
      min={1}
    />
  );
}
