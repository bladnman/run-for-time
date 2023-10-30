import useMegaStore from "../../../store/MegaStore.ts";
import NumberInput from "./NumberInput.tsx";

export default function IncreasePerWeekInput() {
  const increasePerWeekMin = useMegaStore((state) => state.increasePerWeekMin);
  const setIncreasePerWeekMin = useMegaStore(
    (state) => state.setIncreasePerWeekMin,
  );
  return (
    <NumberInput
      value={increasePerWeekMin}
      setFn={setIncreasePerWeekMin}
      defaultValue={5}
      step={1}
      min={1}
    />
  );
}
