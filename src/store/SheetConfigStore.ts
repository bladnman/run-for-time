import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
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
  weeksPerPeriod: number;
  showWeekNumber: boolean;
  dayStatusList: { [key: string]: number };
  hasSeenIntro: boolean;

  // UPDATERS
  setDaysOfWeek: (daysOfWeek: string[]) => void;
  setFirstWeekLongRunMin: (min: number) => void;
  setNumberOfWeeks: (weeks: number) => void;
  setIncreasePerWeekMin: (min: number) => void;
  setWeeksPerPeriod: (weeks: number) => void;
  setShowWeekNumber: (show: boolean) => void;
  setUsername: (username: string) => void;
  setDayStatus: (weekNumber: number, dayNumber: number, value: number) => void;
  setDayStatusToNextValue: (weekNumber: number, dayNumber: number) => void;
  getDayStatus: (
    weekNumber: number,
    dayNumber: number,
    defaultValue: number,
  ) => number;
  clearDayStatus: () => void;
  setHasSeenIntro: (hasSeenIntro: boolean) => void;
}

const useSheetConfigStore = create<SheetConfigStore>()(
  devtools(
    persist(
      (setState, getState) =>
        ({
          username: randomName(),
          daysOfWeek: [...DAY_NAMES_FOR_THE_WEEK],
          firstWeekLongRunMin: 10,
          numberOfWeeks: 8,
          increasePerWeekMin: 5,
          weeksPerPeriod: 1,
          showWeekNumber: true,
          dayStatusList: {},
          hasSeenIntro: false,

          // UPDATERS
          setDaysOfWeek: (daysOfWeek: string[]) =>
            setState({ daysOfWeek: daysOfWeek }),
          setFirstWeekLongRunMin: (min: number) =>
            setState({ firstWeekLongRunMin: min }),
          setNumberOfWeeks: (weeks: number) =>
            setState({ numberOfWeeks: weeks }),
          setIncreasePerWeekMin: (min: number) =>
            setState({ increasePerWeekMin: min }),
          setWeeksPerPeriod: (weeks: number) =>
            setState({ weeksPerPeriod: weeks }),
          setShowWeekNumber: (show: boolean) =>
            setState({ showWeekNumber: show }),
          setUsername: (username: string) => setState({ username: username }),
          setDayStatus: (
            weekNumber: number,
            dayNumber: number,
            value: number,
          ) => {
            const key = `${weekNumber}-${dayNumber}`;
            const dayStatusList = { ...getState().dayStatusList };
            if (value === 0) {
              delete dayStatusList[key];
            } else {
              dayStatusList[key] = value;
            }
            setState({ dayStatusList: dayStatusList });
          },
          setDayStatusToNextValue: (weekNumber: number, dayNumber: number) => {
            const key = `${weekNumber}-${dayNumber}`;
            const dayStatusList = { ...getState().dayStatusList };
            const dayStatus = dayStatusList[key] ?? 0;
            let newValue = dayStatus;
            switch (dayStatus) {
              case 0:
                newValue = 1;
                break;
              case 1:
                newValue = 2;
                break;
              case 2:
                newValue = 3;
                break;
              case 3:
                newValue = 4;
                break;
              case 4:
                newValue = 0;
                break;
            }
            dayStatusList[key] = newValue;
            setState({ dayStatusList: dayStatusList });
          },
          getDayStatus: (
            weekNumber: number,
            dayNumber: number,
            defaultValue: number = 0,
          ) => {
            const key = `${weekNumber}-${dayNumber}`;
            const dayStatusList = { ...getState().dayStatusList };
            return dayStatusList[key] ?? defaultValue;
          },
          clearDayStatus: () => setState({ dayStatusList: {} }),
          setHasSeenIntro: (hasSeenIntro: boolean) =>
            setState({ hasSeenIntro: hasSeenIntro }),
        }) as SheetConfigStore,
      {
        name: "sheet-config", // name of the item in the storage (must be unique)
        // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      },
    ),
  ),
);

// @ts-expect-error -- intentional miss-use of window
window["sheetConfigStore"] = useSheetConfigStore;
console.warn(
  "The store is externalized for development mode under the name 'sheetConfigStore' here.\n\n Try `megaStore.getState()` to browse.",
);

export default useSheetConfigStore;
