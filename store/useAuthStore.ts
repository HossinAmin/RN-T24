import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";

type AuthType = {
  email: string;
  password: string;
  token: string | undefined;
  setEmail: (newEmail: string) => void;
  setPassword: (newPassword: string) => void;
  setToken: (newToken: string | undefined) => void;
  clearToken: () => void;
};

const secureStoreStorage = {
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

const useAuthStore = create(
  persist<AuthType>(
    (set) => ({
      email: "",
      password: "",
      token: undefined,
      setEmail: (newEmail) => set({ email: newEmail }),
      setPassword: (newPassword) => set({ password: newPassword }),
      setToken: (newToken) => set({ token: newToken }),
      clearToken: async () => {
        set({ token: undefined });
        await SecureStore.deleteItemAsync("auth-storage");
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => secureStoreStorage),
    }
  )
);

export { useAuthStore };
