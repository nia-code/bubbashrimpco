import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Products {
  _id: string,
  price: number,
  title: string ,
  img: string,
  category: string,
  quantity: number,
  type: string
//   createdAt: string
}

interface CartState {
  products: Products[];
  quantity: number;
  total: number;
}

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Products>) => {
      const productToAdd = action.payload;
      const existingProduct = state.products?.find((product) => product._id === productToAdd._id);

      if (existingProduct) {
        // If the product with the same ID already exists, increase its quantity
        existingProduct.quantity += 1;
      } else {
        // If it doesn't exist, add the new product to the cart
        state.products?.push(productToAdd);
        state.quantity += 1;
      }

      // Recalculate the total based on the updated cart
      state.total = state.products?.reduce(
        (total, product) => (total + product.price * product.quantity),
        0
      );


    },
    removeProduct: (state, action: PayloadAction<string | undefined>) => {
      const productIdToRemove = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product._id === productIdToRemove
      );
      if (productIndex !== -1) {
        const productToRemove = state.products[productIndex];
        if (productToRemove.quantity > 1) {
          // If the product quantity is greater than 1, decrement it
          productToRemove.quantity -= 1;
          state.total -= productToRemove.price;

        } else {
          // If the product quantity is 1, remove it from the cart
          state.products.splice(productIndex, 1);
          state.quantity -= 1;
        }

      }
    },
    clearCart: (state) => {
      state.products = []; // Clears the products array
      state.quantity = 0; // Resets the quantity to 0
      state.total = 0; // Resets the total to 0
    },
  },
});

export const { addProduct, removeProduct, clearCart  } = cartSlice.actions;

// Specify the return type for the selectProductItems selector
export const selectProductItems = (state: { cart: CartState }) => state.cart.products;
export const cartProducts = (state: { cart: CartState }) => state.cart.quantity;
export const selectTotal = (state: { cart: CartState }) => state.cart.total;


export default cartSlice.reducer;