import { create } from "zustand";
import * as SecureStore from "expo-secure-store";

type LoginType = {
  email: string;
  password: string;
  setEmail: (newEmail: string) => void;
  setPassword: (newPassword: string) => void;
  storeToken: (key: string, token: string) => Promise<void>;
  getToken: (key: string) => Promise<string | null>;
};

const useLogin = create<LoginType>((set) => ({
  email: "",
  password: "",
  setEmail: (newEmail) => set({ email: newEmail }),
  setPassword: (newPassword) => set({ password: newPassword }),
  storeToken: async (key, token) => {
    await SecureStore.setItemAsync(key, token);
  },
  getToken: async (key) => {
    const token = await SecureStore.getItemAsync(key);
    console.log(key, token);
    return token;
  },
}));

export { useLogin };
