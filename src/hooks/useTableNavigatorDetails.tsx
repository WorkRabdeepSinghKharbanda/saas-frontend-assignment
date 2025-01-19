import { create } from "zustand";

interface TableNavigatorData {
  currentNavigatorPage: number;
  setTableNavigatorPage: (passedNavigatorPage: number) => void;
}

const useTableNavigatorData = create<TableNavigatorData>((set) => ({
  currentNavigatorPage: 1,
  setTableNavigatorPage: (passedNavigatorPage) => {
    set(() => ({
      currentNavigatorPage: passedNavigatorPage,
    }));
  },
}));

export default useTableNavigatorData;
