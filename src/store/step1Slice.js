import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    type: "mieszkanie",
    roomsCount: 1,
    bathroomsCount: 1,
    kitchen: "kuchnia",
  },
};

export const step1Slice = createSlice({
  name: "step1",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveData } = step1Slice.actions;
export default step1Slice.reducer;
