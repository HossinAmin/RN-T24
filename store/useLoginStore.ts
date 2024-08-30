import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";

type LoginType = {
  email: string;
  password: string;
  token: string | undefined;
  setEmail: (newEmail: string) => void;
  setPassword: (newPassword: string) => void;
  setToken: (newToken: string | undefined) => void;
};

const secureStorage = {
  getItem: async (name: string) => {
    return await SecureStore.getItemAsync(name);
  },
  setItem: async (name: string, value: string) => {
    await SecureStore.setItemAsync(name, value);
  },
  removeItem: async (name: string) => {
    await SecureStore.deleteItemAsync(name);
  },
};

const useLoginStore = create(
  persist<LoginType>(
    (set) => ({
      email: "",
      password: "",
      token: undefined,
      setEmail: (newEmail) => set({ email: newEmail }),
      setPassword: (newPassword) => set({ password: newPassword }),
      setToken: (newToken) => set({ token: newToken }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => secureStorage),
    }
  )
);

export { useLoginStore };
