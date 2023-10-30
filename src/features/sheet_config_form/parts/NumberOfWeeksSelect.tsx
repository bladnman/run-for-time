import useMegaStore from "../../../store/MegaStore.ts";
import NumberInput from "./NumberInput.tsx";

export default function NumberOfWeeksSelect() {
  const numberOfWeeks = useMegaStore((state) => state.numberOfWeeks);
  const setNumberOfWeeks = useMegaStore((state) => state.setNumberOfWeeks);
  return (
    <NumberInput
      value={numberOfWeeks}
      setFn={setNumberOfWeeks}
      defaultValue={10}
      step={1}
      min={1}
    />
  );
}
