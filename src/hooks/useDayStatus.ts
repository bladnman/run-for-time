import useSheetConfigStore from "@store/SheetConfigStore.ts";
import { useMemo } from "react";

export default function useDayStatus(
  weekNumber: number,
  dayNumber: number,
  defaultValue: number = 0,
) {
  const getDayStatus = useSheetConfigStore((state) => state.getDayStatus);
  const dayStatusList = useSheetConfigStore((state) => state.dayStatusList);

  return useMemo(() => {
    return getDayStatus(weekNumber, dayNumber, defaultValue);
  }, [weekNumber, dayNumber, defaultValue, dayStatusList, getDayStatus]);
}
