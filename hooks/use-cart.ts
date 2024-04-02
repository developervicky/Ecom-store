import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: ProductType[];
  totalCount: number;
  addItem: (data: ProductType) => void;
  removeItems: (id: string) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      totalCount: 0,
      addItem: (data: ProductType) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === data.id);
        if (existingItem) {
          const count = (existingItem.cartCount! += 1);
          set({
            items: [...get().items],
          });
          const cartCount = get().items.reduce((total, item) => {
            return total + item.cartCount!;
          }, 0);
          set({ totalCount: cartCount });
          return toast.success(`Item again added to cart (${count} No) 🙏`);
        }
        data.cartCount = 1;
        set({ items: [...get().items, data] });
        const cartCount = get().items.reduce((total, item) => {
          return total + item.cartCount!;
        }, 0);
        set({ totalCount: cartCount });
        toast.success("Item added to cart 🙏");
      },
      removeItems: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        const cartCount = get().items.reduce((total, item) => {
          return total + item.cartCount!;
        }, 0);
        set({ totalCount: cartCount });
        toast.success("Item removed from cart ✌️");
      },
      removeItem: (id: string) => {
        const currentItem = get().items;
        const removingItem = currentItem.find((item) => item.id === id);
        if (removingItem?.cartCount) {
          if (removingItem.cartCount === 1) {
            removingItem.cartCount = 0;
            set({ items: [...get().items.filter((item) => item.id !== id)] });
          } else {
            removingItem.cartCount -= 1;
            set({
              items: [...get().items],
            });
          }
        }
        const cartCount = get().items.reduce((total, item) => {
          return total + item.cartCount!;
        }, 0);
        set({ totalCount: cartCount });
        return toast.success("Item removed from cart ✌️");
      },
      removeAll: () => {
        set({ items: [] });
        const cartCount = get().items.reduce((total, item) => {
          return total + item.cartCount!;
        }, 0);
        set({ totalCount: cartCount });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
