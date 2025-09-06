// This slice manages the state for orders.
import { createSlice } from '@reduxjs/toolkit';
import { MOCK_ORDERS_DATA } from '../data';

const initialState = {
  orders: MOCK_ORDERS_DATA,
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
});

export default orderSlice.reducer;
