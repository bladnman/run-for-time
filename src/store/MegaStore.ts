import { create } from "zustand";
import { devtools } from "zustand/middleware";
export interface MegaStore {
  appName: string;
  isSheetConfigDialogOpen: boolean;
  setIsSheetConfigDialogOpen: (isOpen: boolean) => void;
}

const useMegaStore = create<MegaStore>()(
  devtools(
    (setState) =>
      ({
        appName: "Run for Time",
        isSheetConfigDialogOpen: true,
        setIsSheetConfigDialogOpen: (isOpen: boolean) =>
          setState({ isSheetConfigDialogOpen: isOpen }),
      }) as MegaStore,
  ),
);

// @ts-expect-error -- intentional miss-use of window
window["megaStore"] = useMegaStore;
console.warn(
  "The store is externalized for development mode under the name 'megaStore' here.\n\n Try `megaStore.getState()` to browse.",
);

export default useMegaStore;
