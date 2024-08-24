import { create } from "zustand";

type UserType = {
  name: string;
  image: string;
  email: string;
};

type UserStoreType = {
  user: null | UserType;
  login: (user: UserType) => void;
  logout: () => void;
};

const useUserStore = create<UserStoreType>((set) => ({
  user: null,
  login: (user) => {
    // fetch user data
    set({ user });
  },
  logout: () => {
    set({ user: null });
  },
}));

export default useUserStore;
