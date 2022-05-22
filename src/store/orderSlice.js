import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    type: "mieszkanie",
    roomsCount: 1,
    bathroomsCount: 1,
    kitchen: "kuchnia",
  },
};

export const orderSlice = createSlice({
  name: "orderData",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.value = { ...state.value, ...action.payload };
      console.log(state.value);
    },
  },
});

export const { saveData } = orderSlice.actions;
export default orderSlice.reducer;
