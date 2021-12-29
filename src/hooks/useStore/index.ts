import create, { SetState } from "zustand";
import { StateType } from "../../screens/HomeScreen/type";

export const useStore = create((set:SetState<StateType>) => ({
  count: 0,
  increaseCount: () => set((state:StateType) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state:StateType) => ({ count: state.count > 0 ? state.count - 1 : state.count })),
}));
