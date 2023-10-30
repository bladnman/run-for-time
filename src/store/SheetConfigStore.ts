import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { DAY_NAMES_FOR_THE_WEEK } from "@CONST";
import randomName from "@utils/randomName.ts";
export interface SheetConfigStore {
  username: string;
  /**
   * The idea behind "daysOfWeek" is to allow the user to customize the names of the days of the week.
   * If they can choose the "week starts with..." then we will need to re-order the days of the week
   * and store them in this array.
   *
   * Thus, "weekStartDay" is always the first element of this array.
   */
  daysOfWeek: string[];
  firstWeekLongRunMin: number;
  numberOfWeeks: number;
  increasePerWeekMin: number;

  // UPDATERS
  setDaysOfWeek: (daysOfWeek: string[]) => void;
  setFirstWeekLongRunMin: (min: number) => void;
  setNumberOfWeeks: (weeks: number) => void;
  setIncreasePerWeekMin: (min: number) => void;
}

const useSheetConfigStore = create<SheetConfigStore>()(
  devtools(
    (setState) =>
      ({
        username: randomName(),
        daysOfWeek: [...DAY_NAMES_FOR_THE_WEEK],
        firstWeekLongRunMin: 15,
        numberOfWeeks: 12,
        increasePerWeekMin: 5,

        // UPDATERS
        setDaysOfWeek: (daysOfWeek: string[]) =>
          setState({ daysOfWeek: daysOfWeek }),
        setFirstWeekLongRunMin: (min: number) =>
          setState({ firstWeekLongRunMin: min }),
        setNumberOfWeeks: (weeks: number) => setState({ numberOfWeeks: weeks }),
        setIncreasePerWeekMin: (min: number) =>
          setState({ increasePerWeekMin: min }),
      }) as SheetConfigStore,
  ),
);

// @ts-expect-error -- intentional miss-use of window
window["sheetConfigStore"] = useSheetConfigStore;
console.warn(
  "The store is externalized for development mode under the name 'sheetConfigStore' here.\n\n Try `megaStore.getState()` to browse.",
);

export default useSheetConfigStore;
