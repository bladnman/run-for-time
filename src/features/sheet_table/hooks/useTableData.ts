import useSheetConfigStore from "@store/SheetConfigStore.ts";
import padLeft from "@utils/padLeft.ts";

export default function useTableData() {
  const numberOfWeeks = useSheetConfigStore((state) => state.numberOfWeeks);
  const weeksPerPeriod = useSheetConfigStore((state) => state.weeksPerPeriod);
  const increasePerWeekMin = useSheetConfigStore(
    (state) => state.increasePerWeekMin,
  );
  const firstWeekLongRunMin = useSheetConfigStore(
    (state) => state.firstWeekLongRunMin,
  );

  const rows = [];
  let increase = 0;
  for (let i = 0; i < numberOfWeeks; i++) {
    // not on the first week, and
    // when the "period" is reached
    // increase the long run by the "increasePerWeekMin"
    if (i > 0 && i % weeksPerPeriod === 0) {
      increase += increasePerWeekMin;
    }
    const longRun = firstWeekLongRunMin + increase;
    const weekData = getDataFor(i + 1, longRun);
    rows.push(weekData);
  }

  return rows;
}
function getDataFor(weekNumber: number, weekLongRunMin: number) {
  return {
    weekNumberText: `${padLeft(weekNumber, 2)}`,
    weekNumber: weekNumber,
    days: [
      {
        duration: 0,
        count: 0,
      },
      {
        duration: Math.max(1, Math.round(weekLongRunMin / 2.5)),
        count: 2,
      },
      {
        duration: 0,
        count: 0,
      },
      {
        duration: Math.max(1, Math.round(weekLongRunMin / 2.7)),
        count: 3,
      },
      {
        duration: Math.max(1, Math.round(weekLongRunMin / 2.0)),
        count: 2,
      },
      {
        duration: 0,
        count: 0,
      },
      {
        duration: weekLongRunMin,
        count: 1,
      },
    ],
  };
}
