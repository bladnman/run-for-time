import useSheetConfigStore from "@store/SheetConfigStore.ts";
import padLeft from "@utils/padLeft.ts";

export default function useTableData() {
  const numberOfWeeks = useSheetConfigStore((state) => state.numberOfWeeks);
  const increasePerWeekMin = useSheetConfigStore(
    (state) => state.increasePerWeekMin,
  );
  const firstWeekLongRunMin = useSheetConfigStore(
    (state) => state.firstWeekLongRunMin,
  );

  const rows = [];
  for (let i = 0; i < numberOfWeeks; i++) {
    const increase = i * increasePerWeekMin;
    const longRun = firstWeekLongRunMin + increase;
    const weekData = getDataFor(i + 1, longRun);
    rows.push(weekData);
  }

  return rows;
}
function getDataFor(weekNumber: number, weekLongRunMin: number) {
  return {
    weekLabel: `WEEK ${padLeft(weekNumber, 2)}`,
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
