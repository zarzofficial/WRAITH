import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size?: string) => void;
  updateQuantity: (id: string, size: string | undefined, delta: number) => void;
  cartTotal: () => number;
  itemCount: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (newItem) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === newItem.id && item.size === newItem.size
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          ),
        };
      }
      return { items: [...state.items, newItem] };
    });
  },
  removeItem: (id, size) => {
    set((state) => ({
      items: state.items.filter((item) => !(item.id === id && item.size === size)),
    }));
  },
  updateQuantity: (id, size, delta) => {
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id === id && item.size === size) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    }));
  },
  cartTotal: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
  itemCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0);
  },
}));
