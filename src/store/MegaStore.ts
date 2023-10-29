import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { DAYS_OF_WEEK } from "../utils/CONST.ts";
export interface MegaStore {
  appName: string;
  weekStartDay: number;
}

const useMegaStore = create<MegaStore>()(
  devtools(
    () =>
      ({
        appName: "Run for Time",
        weekStartDay: DAYS_OF_WEEK.MONDAY,
      }) as MegaStore,
  ),
);
// @ts-expect-error -- intentional miss-use of window
window["megaStore"] = useMegaStore;
console.warn(
  "The store is externalized for development mode under the name 'megaStore' here.\n\n Try `megaStore.getState()` to browse.",
);

export default useMegaStore;
