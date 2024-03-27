import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  isLoggedIn: boolean;
  user: object;
};

type Actions = {
  reset: () => void;
  setIsLoggedIn: (data: boolean) => void;
  setUser: (data: object) => void;
};

// define the initial state
const initialState: State = {
  isLoggedIn: false,
  user: {},
};

export const useStore = create<State & Actions>()(
  persist(
    set => ({
      ...initialState,
      reset: () => set(initialState),

      setIsLoggedIn: (data: boolean) => set({ isLoggedIn: data }),
      setUser: (data: object) => set({ user: data }),
    }),
    {
      name: 'dkc',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
