import { create } from 'zustand';

interface StoreState {
  productIds: number[];
  actions: {
    emptyStore: () => void;
    addProduct: (id: number) => void;
    removeProduct: (id: number) => void;
  };
}

const useStore = create<StoreState>()((set) => ({
  productIds: [],
  actions: {
    emptyStore: () => set({ productIds: [] }),
    addProduct: (id: number) =>
      set((state) => ({ productIds: [...state.productIds, id] })),
    removeProduct: (id: number) =>
      set((state) => ({
        productIds: state.productIds.filter((productId) => productId !== id),
      })),
  },
}));

//* SELECTORS
export const useProducts = () => useStore((state) => state.productIds);

//* ACTIONS
export const useStoreActions = () => useStore((state) => state.actions);
