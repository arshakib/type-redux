import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: object[];
}

const initialState: CounterState = {
  value: [],
};

export const AllTask = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    incrementByAmount: (state, action: PayloadAction<object>) => {
      state.value = [...state.value, action.payload];
      console.log("state.value", state.value);
      console.log("action.payload", action.payload);
      console.log("action", action);
      console.log("state", state);
      console.log("action.type", action.type);
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = AllTask.actions;

export default AllTask.reducer;
