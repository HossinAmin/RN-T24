import { create } from "zustand";
import { produce } from "immer";
import { persist, PersistStorage } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";

import { createJSONStorage } from "zustand/middleware";

type UserType = {
  name: string;
  image: string;
  email: string;
};

type UserStoreType = {
  user: null | UserType;
  login: (user: UserType) => void;
  logout: () => void;
  editName: (name: string) => void;
};

const storage = createJSONStorage<any>(() => ({
  getItem: async (key: string): Promise<UserStoreType | null> => {
    const value = await SecureStore.getItemAsync(key);
    if (value) {
      const parsedValue = JSON.parse(value);
      if (parsedValue.user && parsedValue.user.name) {
        return parsedValue;
      }
    }
    return null;
  },
  setItem: async (key: string, value: UserStoreType) => {
    const stringValue = JSON.stringify(value.user);
    await SecureStore.setItemAsync(key, stringValue);
  },
}));

const useUserStore = create(
  persist<UserStoreType>(
    (set, get) => ({
      user: null,
      login: (user) => {
        // fetch user data
        set({ user });
      },
      logout: () => {
        set({ user: null });
      },
      editName: (name: string) => {
        set((state) => {
          return produce(state, (draft) => {
            if (draft.user) draft.user.name = name;
          });
        });
      },
    }),
    {
      name: "my-user", // name of the item in the storage (must be unique)
      storage: storage,
    }
  )
);

export default useUserStore;
