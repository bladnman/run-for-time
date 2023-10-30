import { Option, Select } from "@mui/joy";
import React from "react";
import useSheetConfigStore from "@store/SheetConfigStore.ts";

export default function LongRunDaySelect() {
  const [daysOfWeek, setDaysOfWeek] = useSheetConfigStore((state) => [
    state.daysOfWeek,
    state.setDaysOfWeek,
  ]);
  const handleChange = (
    _: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    if (!newValue) return;

    const selectedIndex = daysOfWeek.indexOf(newValue);
    if (selectedIndex < 0) return; // nothing to move
    if (selectedIndex === daysOfWeek.length - 1) return; // nothing to move

    // move all items after index to the beginning
    const newDaysOfWeek = daysOfWeek
      .slice(selectedIndex + 1)
      .concat(daysOfWeek.slice(0, selectedIndex + 1));

    // update store
    setDaysOfWeek(newDaysOfWeek);
  };
  return (
    <Select
      defaultValue={daysOfWeek[daysOfWeek.length - 1]}
      onChange={handleChange}
    >
      {daysOfWeek.map((day) => {
        return <Option value={day}>{day}</Option>;
      })}
    </Select>
  );
}
