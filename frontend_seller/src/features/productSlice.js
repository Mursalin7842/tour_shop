// This slice manages the state for products, including the product list, filter, and the product being viewed.
import { createSlice } from '@reduxjs/toolkit';
import { MOCK_PRODUCTS_DATA } from '../data';

const initialState = {
  products: MOCK_PRODUCTS_DATA,
  filter: 'all',
  viewingProduct: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    setProductFilter: (state, action) => {
      state.filter = action.payload;
    },
    setViewingProduct: (state, action) => {
      state.viewingProduct = action.payload;
    },
  },
});

export const { addProduct, setProductFilter, setViewingProduct } = productSlice.actions;

export default productSlice.reducer;
