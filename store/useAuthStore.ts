import { create } from "zustand";
import * as SecureStore from "expo-secure-store";

type AuthStore = {
  isAuthenticated: boolean;
  setToken: (token: string) => Promise<void>;
  clearToken: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,

  setToken: async (token: string) => {
    await SecureStore.setItemAsync("userToken", token);
    set({ isAuthenticated: true });
  },

  clearToken: async () => {
    await SecureStore.deleteItemAsync("userToken");
    set({ isAuthenticated: false });
  },
  //    I will add a function to check if the user is authenticated getToken() and use useEffect to check if the user is authenticated on app load
}));
