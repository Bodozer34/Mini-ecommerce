import { create } from "zustand";
import { CartItem, Product } from "../types/general-types";
import { persist } from "zustand/middleware";

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product, quantity) => {
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id,
          );
          if (existingItem) {
            const updateCart = state.cart.map((item) => {
              if (item.id === product.id) {
                return {
                  ...item,
                  quantity: item.quantity + quantity,
                };
              }
              return item;
            });
            return { cart: updateCart };
          }
          const newCartItem = {...product, quantity};
          return {cart: [...state.cart, newCartItem]}
        });
      },
    }),
    {
      name: "cart",
    },
  ),
);
