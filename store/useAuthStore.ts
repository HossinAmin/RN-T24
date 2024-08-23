import { create } from "zustand";
import * as SecureStore from "expo-secure-store";

type AuthStore = {
  token: string | null;
  setToken: (token: string) => Promise<void>;
  clearToken: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  token: null,

  setToken: async (token: string) => {
    await SecureStore.setItemAsync("userToken", token);
    set({ token });
  },

  clearToken: async () => {
    await SecureStore.deleteItemAsync("userToken");
    set({ token: null });
  },
}));
