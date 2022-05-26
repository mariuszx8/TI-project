import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orderData",
  initialState: {
    value: {
      type: "mieszkanie",
      roomsCount: 1,
      bathroomsCount: 1,
      kitchen: "kuchnia",
    },
  },
  reducers: {
    saveData: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { saveData } = orderSlice.actions;
export const selectOrderData = (state) => state.order.value;
export default orderSlice.reducer;
