import { configureStore } from "@reduxjs/toolkit";
import step1Slice from "./step1Slice";

export const store = configureStore({
  reducer: { step1: step1Slice },
});
