// src/redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    stock: number;
  }
  
  interface CartState {
    products: Product[];
  }
  
  const initialState: CartState = {
    products: [],
  };
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<Product>) => {
        const productExists = state.products.some(
            (product) => product.id === action.payload.id
          );
        
          if (!productExists) {
            state.products.push(action.payload);
          }
      },
      removeFromCart: (state, action: PayloadAction<string>) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
      },
      clearCart: (state) => {
        state.products = [];
      },
      updateQuantity(
        state,
        action: PayloadAction<{ id: string; amount: number, status: string }>
      ) {
        const product = state.products.find((prod) => prod.id === action.payload.id);
        if (product) {
            // Update the product quantity
            if(action.payload.status === "increment"){
              product.quantity = product.quantity + action.payload.amount;
            }else{
              product.quantity = product.quantity - action.payload.amount;
            }
            product.price = product.price * action.payload.amount;
            if (product.quantity < 1) {
                product.quantity = 1; // Ensure quantity never goes below 1
              }
          }
      }
    },
  });
  
  export const { addToCart, removeFromCart, updateQuantity} = cartSlice.actions; // Named export for actions
  export default cartSlice.reducer; // Default export for reducer