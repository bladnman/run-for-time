import useMegaStore from "../../../store/MegaStore.ts";
import NumberInput from "./NumberInput.tsx";

export default function FirstWeekLongRunInput() {
  const firstWeekLongRunMin = useMegaStore(
    (state) => state.firstWeekLongRunMin,
  );
  const setFirstWeekLongRunMin = useMegaStore(
    (state) => state.setFirstWeekLongRunMin,
  );
  return (
    <NumberInput
      value={firstWeekLongRunMin}
      setFn={setFirstWeekLongRunMin}
      defaultValue={10}
      step={1}
      min={1}
    />
  );
}
