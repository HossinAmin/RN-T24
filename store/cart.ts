import { Product } from "@/types/products";
import { create } from "zustand";

/* 
1. add 
2. remove
3. display
4. count

*/

type CartStoreType = {
  cart: null | Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
};

const useCartStore = create<CartStoreType>((set) => ({
  cart: null,
  addToCart: (product) => {
    set((store) => ({
      cart: [...(store.cart ?? []), product],
    }));
  },
  removeFromCart: (productId) => {
    set((store) => ({
      cart: (store.cart ?? []).filter(
        (item) => item.id.toString() !== productId
      ),
    }));
  },
}));

export default useCartStore;
