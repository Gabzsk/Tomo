import { create } from "zustand";

type FilterState = {
  selectedStatus?: string;
  selectedTag?: string;
  minRating?: number | null;
};

type FilterActions = {
  setSelectedStatus: (status?: string) => void;
  setSelectedTag: (tag?: string) => void;
  setMinRating: (rating?: number | null) => void;
  resetFilters: () => void;
};

export const useFilterStore = create<FilterState & FilterActions>((set) => ({
  selectedStatus: undefined,
  selectedTag: undefined,
  minRating: undefined,

  setSelectedStatus: (status) => set({ selectedStatus: status }),
  setSelectedTag: (tag) => set({ selectedTag: tag }),
  setMinRating: (rating) => set({ minRating: rating }),

  resetFilters: () =>
    set({
      selectedStatus: undefined,
      selectedTag: undefined,
      minRating: undefined,
    }),
}));
